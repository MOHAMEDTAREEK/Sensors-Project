import { View,StyleSheet, ScrollView,Text,Alert } from "react-native";
import Graph from "../components/Graph";
import React, { useState, useEffect } from 'react';
import { db } from '../firebase-config.js';
//import {
 // ref,
 // onValue,
//} //from 'firebase/database';
import ExampleOne from "../components/Table"
function ComaprisonScreen (props) {
  let tableData=[];
  const time=['30', '60', '90', '120','150','180','210','240','270','300','330','360']
  const [co2, setCo2] = useState(["0"]);
  const [pH, setPH] = useState([1,1,3]);
  const [waterLvl, setWaterLvl] = useState([6,7,7]);

  useEffect(() => {
    Alert.alert(
      "Flood Warning",
      "Flooding  is expected, immediate action required",
      [
        {
          text: "Ok",
          onPress: () => console.log("ok Pressed"),
          style: "cancel",
        },
      ],
      {
        cancelable: true,
      }
    );
      onValue(ref(db, '/'), querySnapShot => {
          let data = querySnapShot.val() || {};

          let co2Values = Object.values(data.Sensor2.Gas);
          const pHValues = Object.values(data.Sensor3.pH);
          const waterLvlValues = Object.values(data.Sensor1.waterlvl);

          co2Values=co2Values.map((value)=>{return value.toString()})

          setCo2(co2Values)
          setPH(pHValues)
          setWaterLvl(waterLvlValues)

          for (let i = 0; i < 12; i += 1) {
            const rowData = [];
              rowData.push(time[i]);
              rowData.push(co2Values[i]);
              rowData.push(pHValues[i]);
              rowData.push(waterLvlValues[i]);
              tableData.push(rowData);
            }
          

      });
  }, []);
return (
  <ScrollView>
  <View style={styles.container}>
    <ExampleOne data={tableData}/>

  <Graph  data={pH} labels={["663", "652", "648", "651", "654", "653", "652", "657", "650", "655", "659", "650"]}/>
  <Text style={styles.text}>pH Readings with Co2 Reading </Text>

  <View style={styles.secContainer}>
  <Graph  data={waterLvl}  labels={["663", "652", "648", "651", "654", "653", "652", "657", "650", "655", "659", "650"]} />
  <Text style={styles.text}>Water level Readings with Co2 Reading </Text>

  </View>
  </View>
  </ScrollView>
  
)
}

export default ComaprisonScreen;

  const styles=StyleSheet.create({
    container:{
      flex:1,
      justifyContent:'center',
      margin:10,
      paddingTop:24,
    },
    secContainer:{
      paddingTop:30,
    },
    text:{margin:21,fontSize:18, color:"purple",textAlign:'center'}
  })