import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Colors, GlobalStyles } from "../constants/colors";
import Icon from "./icon";

function Card () {  
    const navigation = useNavigation(); 
    function cardPressHandler () {
    navigation.navigate ('DetailsScreen')
}
    return (
        <Pressable onPress={cardPressHandler} style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.cardContainer}> 
            <Text style={styles.mainPercentage}>70%</Text>
            <Text style={styles.Textdanger}>unit</Text>
        </View>
        </Pressable>
    )
}

export default Card;

const styles = StyleSheet.create ({
    cardContainer: {
        padding:90,
        backgroundColor:  GlobalStyles.colors.primary500,
        justifyContent:'center',
        alignItems:'center',
        margin:46,
        borderRadius: 135,
        elevation:8,
        
    } ,
    mainPercentage :{
        fontSize: 50,
        color:'white',
    },
    pressed:{
        opacity:0.75,
    },
    Textdanger :{
        color:'white',
        borderTopWidth:1,
        fontSize:16,
    },
    textCatigory:{
        fontSize:16,
        justifyContent:"center",
        alignItems:'center',
        color:'white'
    }
})