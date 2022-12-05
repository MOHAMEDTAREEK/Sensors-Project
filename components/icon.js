import { Ionicons } from "@expo/vector-icons";
import { Text, View, StyleSheet, Image } from "react-native";
import { MaterialCommunityIcons } from '@expo/vector-icons'
import { Colors, GlobalStyles } from "../constants/colors";
function Icon ({ name, text }) {
return (
    <View style={styles.container}> 
      <MaterialCommunityIcons name={name} size={50} color="white" />
    </View>
)
}

export default Icon;
 const styles= StyleSheet.create({
 container: {
    backgroundColor: GlobalStyles.colors.primary500,
    justifyContent:'center',
    padding:24,
    alignItems:'center',
    borderRadius:120,
    elevation:8,
    margin:8,
 },
text: {
fontSize:26,
color:'white'
},

 })