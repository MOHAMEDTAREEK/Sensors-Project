import { Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'

function Icon ({ name,height }) {
return (
    <View style={{...styles.container,height: height , width:height }}> 
      <MaterialCommunityIcons name={name} size={40} color="white" /> ,
      
    </View>
)
}

export default Icon;
 const styles= StyleSheet.create({
 container: {
    //  backgroundColor: GlobalStyles.colors.primary500,
    justifyContent:'center',
    padding:24,
    alignItems:'center',
    borderRadius:80,
    elevation:8,
    margin:8,
    borderWidth:2,
    borderColor:"white",
    borderStyle:"dashed",
    width:100,
    height:100
 },
text: {
fontSize:26,
color:'white'
},

 })