import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import foodImage from '../assets/products/1.jpg'
export default function Homepage() {
  return (
    <View style={styles.container}>
      <View style={styles.storeItems}>

      </View>

        <View style={styles.food}>
          <Image source={foodImage} style={width:'30px', height:'30px'}/>
          <Text>food sec</Text>
        </View>

        <View style={styles.drinks}>
           <Text>food sec</Text>

        </View>
     

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   
    alignItems: 'center',
    backgroundColor: 'red',
  },

  storeItems:{
    paddingTop:'20%'
  },
});