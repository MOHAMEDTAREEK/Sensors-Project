import React, { useState, useEffect } from 'react';
import { Text, View, Button } from "react-native";
import Graph from "../components/Graph";
import { db } from '../firebase-config.js';
import {
  ref,
  onValue,
  push,
  update,
  remove
} from 'firebase/database';
function Details(props) {


  const [items, setItems] = useState([1, 2, 3]);
  const time=['30', '60', '90', '120','150','180','210','240','270','300','330','360']

  const path = props.route.params.path

  useEffect(() => {

    onValue(ref(db, path), querySnapShot => {
      let data = querySnapShot.val() || {};
      const keys = Object.values(data);
      setItems(keys);

    });
  }, []);


  const addReading = () => {
    let x = [7.75, 7.73, 7.71, 7.69, 7.67, 7.64, 7.62, 7.61, 7.59, 7.58, 7.57, 7.54]
    x.map((val) => {
      push(ref(db, path), val);})
  }

  const deleteReading = () => {
    remove(ref(db, path));
  }
  return (
    <View style={styles.container}>
      <Text style={styles.text}>{path.slice(1, 8)} Readings with time</Text>
      <Graph data={items} labels={time} />
    </View>
  )
}

export default Details;


const styles=StyleSheet.create({
  container:{ alignItems: "center", justifyContent: 'center', top: 40, flex: 1, height: 390 },
  text:{ margin: 21, fontSize: 18, color: "purple" }
})