import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import foodImage from '../assets/products/5.jpg'
import drinkImage from '../assets/products/1.jpg'
export default function Homepage() {
  return (
    <View style={styles.container}>
      <View style={styles.storeItems}>

      </View>

        <View style={styles.food}>
        <Image source={drinkImage}   style={{width:'90%', height:'30px',alignSelf:'center'}}/>
          
          <Text>food sec</Text>
        </View>

        <View style={styles.drinks}>
        <Image source={foodImage}   style={{width:'90%', height:'30px',alignSelf:'center'}}/>
           <Text  style={{{}>Refreshments section</Text>

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
  food:{
    width:'100%'
  },
  drinks:{
    width:'100%'
  }
});