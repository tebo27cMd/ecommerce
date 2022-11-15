import React from "react";
import { View,StyleSheet } from "react-native";


export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.topView}>
ftrhy
            </View>

            <View style={styles.midView}>
tyj
            </View>

            <View style={styles.navView}>

            </View>

        </View>
    )
}

const styles=StyleSheet.create({
    container:{
   
        backgroundColor:'purple',

    },
    topView:{
   
        flex:0.25,
        width:'100%',
        backgroundColor:'red'

    },
    midView:{
       
        height:500,
        width:'100%',
        backgroundColor:'blue'
    },
    navView:{
        justifyContent:'flex-end',
        height:50,
        width:'100%',
        backgroundColor:'black'
    }

})