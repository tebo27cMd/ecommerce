import React from "react";
import { View, StyleSheet } from "react-native";


export default function Home() {
    return (
        <View style={styles.container}>
            rtg
            <View style={styles.cont} >
           rtgb
            </View>
        </View>
    )
}

const styles = StyleSheet.create({
    container: {

height:50,
        backgroundColor: 'purple',

    },
    cont: {
        flexBasis:120,
        backgroundColor:'red'

    }


})