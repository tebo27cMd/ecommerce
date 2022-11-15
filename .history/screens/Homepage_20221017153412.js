import * as React from "react";
import { View, StyleSheet ,ScrollView} from "react-native";


export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.topContainer}>

            </View>
            <View style={styles.midContainer}>
                
                </View>
                <View style={styles.Container}>
                
                </View>
           
        </View>
    )
}

const styles = StyleSheet.create({
    container: {
      flex:1,
      flexDirection:"row",
flexWrap:'wrap',
        backgroundColor: 'purple',
        height:'100%'

    },
 


})