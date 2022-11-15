import * as React from "react";
import { View, StyleSheet ,ScrollView} from "react-native";


export default function Home() {
    return (
        <View style={styles.container}>
            <View style={styles.Tontainer}>

            </View>
            <View style={styles.container}>
                
                </View>
                <View style={styles.container}>
                
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