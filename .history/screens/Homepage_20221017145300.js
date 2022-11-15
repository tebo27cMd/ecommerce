import React from "react";
import { View,StyleSheet } from "react-native";


export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>

            </View>

            <View style={styles.midView}>

            </View>

            <View style={styles.navView}>

            </View>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
        flex:1,

    },
    topView:{
        height:50,
        width:'100%',
        backgroundColor:'red'

    },
    midView:{
        height:100,
        width:'100%',
        backgroundColor:'blue'
    },
    navView:{
        height:50,
        width:'100%',
        backgroundColor:'blacj=k'
    }

})