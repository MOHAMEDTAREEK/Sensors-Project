import { View,StyleSheet, ScrollView } from "react-native";
import Graph from "../components/Graph";

  

function ComaprisonScreen () {
return (
  <ScrollView>
  <View style={styles.container}>
  <Graph />
  <View style={styles.secContainer}>
  <Graph />
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
    }
  })