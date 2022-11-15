import * as React from "react";
import { View, StyleSheet, ScrollView,Text } from "react-native";


export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
               <Text>eee</Text>
            </View>
            <View style={styles.midContainer}>
            <Text>eee</Text>
            </View>
            <View style={styles.navContainer}>
            <Text>eee</Text>
            </View>

        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        paddingTop:100,
        flex: 1,
        flexDirection:'column',
        backgroundColor:'black'

    },
    topContainer:{
        flex: 1,
width:75,
height:75,
backgroundColor:'blue',
    },
    midContainer:{
        flex: 1,
        width:75,
        height:75,
        backgroundColor:'red', 
    },
    navContainer:{

    }



})