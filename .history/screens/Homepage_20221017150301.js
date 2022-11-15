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
        flex:1,justifyContent:'center',
        alignItems:'center',

    },
    topView:{
    flex:1,
        height:0,
        width:'100%',
        backgroundColor:'red'

    },
    midView:{

        height:200,
        width:'100%',
        backgroundColor:'blue'
    },
    navView:{
        
        height:50,
        width:'100%',
        backgroundColor:'black'
    }

})