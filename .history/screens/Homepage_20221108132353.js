import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image,Linking,Touch } from 'react-native'
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
        <View style={styles.imageContainer}>
        <Image source={banner}   style={{width:'90%', height:'150px',alignSelf:'center' ,borderRadius:'10px'}}/>
        </View>
      
      <View style={styles.bannerBox}>
      <Text style={styles.bannerText}>Choose From </Text> 
      <Text  style={{alignSelf:'center'}}> Our </Text>
     <Text  style={{alignSelf:'center'}}>Wholesome Meals</Text>
     <Text  style={{alignSelf:'center'}}>and</Text>
     <Text  style={{alignSelf:'center'}}>Refreshments</Text>

      </View>
    
      </View>

        <View style={styles.food}>
        <Image source={foodImage}   style={{width:'90%', height:'150px',alignSelf:'center',borderRadius:'27px'}}/>
          
          <Text style={{alignSelf:'center'}}>food sec</Text>
        </View>

        <View style={styles.drinks}>
        <Image source={drinkImage}   style={{width:'90%', height:'150px',alignSelf:'center',borderRadius:'27px'}}/>
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
    borderColor:'orange',
    alignSelf:'center',
    width:"70%",
    top:'10%',
  borderBottomWidth:'1px',
  borderTopWidth:'1px'


  },

  storeItems:{
    paddingTop:'7%',

    borderColor:'black'

  },
  food:{
    width:'100%',
    paddingTop:'16%'
  },
  drinks:{
    width:'100%'
  },
  banner:{
    width:'100%'
  },
  bannerText:{
    paddingTop:'20px',
    textAlign: 'center',
  },
  imageContainer:{
borderRadius:'20px'

  }

});