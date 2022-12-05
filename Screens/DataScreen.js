import { Text, View,StyleSheet, ScrollView, SafeAreaView } from "react-native";
import Card from "../components/Card";
import Icon from "../components/icon";
import { Colors, GlobalStyles } from "../constants/colors";

function DataScreen( ) {
    return (
        <View>
        <ScrollView 
        horizontal={true}
        contentContainerStyle={styles.scrollContainer}
        showsHorizontalScrollIndicator={false}
       >
        <View style={styles.rootContainer}>
        <Card text={"co2"} />
        <Card text={"ph"}/> 
        <Card text={"water Lv."}/>
        </View>
        </ScrollView>
         <View style={styles.IconContainer}>
        <Icon  name="ph"/>
        <Icon  name="water" />
        <Icon  name="molecule-co2"/> 
        </View>
        </View>
    )
}

export default DataScreen;
 const styles = StyleSheet.create({
    Textcontaner: {
        color : 'white',
    },
    rootContainer: {
        backgroundColor:GlobalStyles.colors.primary700,
        flexDirection:'row',
    },
    scrollContainer: {
        justifyContent:'space-between',
    },
    IconContainer: {
        padding:25,
        flexDirection: 'row',
        justifyContent:'center',
        alignItems:"center",
        }
  })