import { useNavigation } from "@react-navigation/native";
import { Text, View, StyleSheet, Pressable } from "react-native";
import { Colors, GlobalStyles } from "../constants/colors";
import Icon from "./icon";

function Card (props) {  
    
    const navigation = useNavigation(); 
    function cardPressHandler () {
    navigation.navigate ('DetailsScreen',{path:props.path})
}
    return (
        <Pressable onPress={cardPressHandler} style={({pressed}) => pressed && styles.pressed}>
        <View style={styles.cardContainer}> 
            <Text style={styles.mainPercentage}>{props.text}</Text>
            <Text style={styles.Textdanger}>{props.unit}</Text>
        </View>
        </Pressable>
    )
}

export default Card;

const styles = StyleSheet.create ({
    cardContainer: {
        padding:40,
        backgroundColor: "rgba(0,0,0,0)",
        justifyContent:'center',
        alignItems:'center',
        margin:46,
        borderRadius: 100,
        elevation:8,
        borderColor:"white",
        borderWidth:2,
        borderStyle:"dashed",
        height:200,
        width:200

        
    } ,
    mainPercentage :{
        fontSize: 30,
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