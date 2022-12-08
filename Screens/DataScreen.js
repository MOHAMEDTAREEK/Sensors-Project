import { Text, View, StyleSheet, ScrollView, ImageBackground } from "react-native";
import React, { useState, useEffect } from 'react';

import Card from "../components/Card";
import Icon from "../components/icon";
import { Colors, GlobalStyles } from "../constants/colors";
import { db } from '../firebase-config.js';
import {
    ref,
    onValue,
    push,
    update,
    remove
} from 'firebase/database';
import bg from "../assets/bg.png";
const image = { uri: "https://reactjs.org/logo-og.png" };

function DataScreen() {
    const [co2, setCo2] = useState([]);
    const [pH, setPH] = useState([]);
    const [waterLvl, setWaterLvl] = useState([]);

    useEffect(() => {
        onValue(ref(db, '/'), querySnapShot => {
            let data = querySnapShot.val() || {};

            const co2Values = Object.values(data.Sensor2.Gas);
            const pHValues = Object.values(data.Sensor3.pH);
            const waterLvlValues = Object.values(data.Sensor1.waterlvl);

            setCo2(co2Values)
            setPH(pHValues)
            setWaterLvl(waterLvlValues)

        });
    }, []);
    return (
        <View style={{ flex: 1 }}>
            <ImageBackground source={bg} resizeMode="cover" style={styles.image}>

                <ScrollView
                    horizontal={true}
                    contentContainerStyle={styles.scrollContainer}
                    showsHorizontalScrollIndicator={false}
                >
                    <View style={styles.rootContainer}>

                        <Card text={pH[pH.length - 1]} unit={""} path="/Sensor3/pH" />
                        <Card text={waterLvl[waterLvl.length - 1]} unit={"ml"} path="/Sensor1/waterlvl" />
                        <Card text={co2[co2.length - 1]} unit={"ppm"} path="/Sensor2/Gas" />

                    </View>
                </ScrollView>

                <View style={styles.IconContainer1}>
                    <Icon name="water" height={130} />
                </View>

                <View style={styles.IconContainer}>
                    <Icon name="ph" />
                    <Icon name="molecule-co2" />
                </View>

            </ImageBackground>
        </View>
    )
}

export default DataScreen;
const styles = StyleSheet.create({
    Textcontaner: {
        color: 'white',
    }, image: {
        flex: 1,
        justifyContent: "center"
    },

    rootContainer: {
        // backgroundColor: GlobalStyles.colors.primary700,
        flexDirection: 'row',
        height: 350,
        top: 100
    },
    scrollContainer: {
        justifyContent: 'space-between',
        // backgroundColor:"red",
        height: 350
    },
    IconContainer: {
        padding: 10,
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: "center",
    }, IconContainer1: {
        // padding: 25,
        flexDirection: 'row',
        justifyContent: 'center',
        alignItems: "center",
    }

})