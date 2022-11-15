import * as React from "react";
import { View, StyleSheet, ScrollView,Text } from "react-native";


export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>
               <Text></Text>
            </View>
            <View style={styles.midContainer}>

            </View>
            <View style={styles.navContainer}>

            </View>

        </View>
    )
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        flexDirection: "row",
        flexWrap: 'wrap',
        backgroundColor: 'purple',
        height: '100%'

    },



})