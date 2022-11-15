import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import foodImage from '../assets/products/1.jpg'
export default function Homepage() {
  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <View style={styles.food}>


        </View>
        <View style={styles.drinks}>


        </View>
      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
    flex:1,
  },
 main : {
  flex:1,
backgroundColor:'red',
  top:'20%'
  },
  food: {

  },
});