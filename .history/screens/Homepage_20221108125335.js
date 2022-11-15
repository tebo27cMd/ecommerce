import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import foodImage from '../assets/products/5.jpg'
import drinkImage from '../assets/products/1.jpg'
import banner from '../assets/products/Easy.jpg'
export default function Homepage() {
  return (
    <View style={styles.container}>
      <View style={styles.storeItems}>
 
      </View>
      <View style={styles.banner}>
      <Image source={banner}   style={{width:'90%', height:'150px',alignSelf:'center'}}/>
      <View style={styles.bannerBox}>
      <Text style={styles.bannerText}>Choose From Our  </Text> 
     <Text  style={{alignSelf:'center'}}>Wholesome Meals</Text>
     <Text  style={{alignSelf:'center'}}>and</Text>
     <Text  style={{alignSelf:'center'}}>Refreshments</Text>

      </View>
    
      </View>

        <View style={styles.food}>
        <Image source={foodImage}   style={{width:'90%', height:'150px',alignSelf:'center',borderRadius:'20'}}/>
          
          <Text style={{alignSelf:'center'}}>food sec</Text>
        </View>

        <View style={styles.drinks}>
        <Image source={drinkImage}   style={{width:'90%', height:'150px',alignSelf:'center'}}/>
           <Text  style={{alignSelf:'center'}}>Refreshments section</Text>

        </View>
 
     

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   flex:1,
    alignItems: 'center',

  },
  bannerBox:{
    alignSelf:'center',
    width:"50%",
    top:'14%',
  borderBottomWidth:'1px',
  borderTopWidth:'1px'


  },

  storeItems:{
    paddingTop:'10%',

    borderColor:'black'

  },
  food:{
    width:'100%',
    paddingTop:'10%'
  },
  drinks:{
    width:'100%'
  },
  banner:{
    width:'100%'
  },
  bannerText:{
    paddingTop:'30px',
    textAlign: 'center',
  }

});