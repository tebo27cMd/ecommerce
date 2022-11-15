import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import foodImage from '../assets/products/5.jpg'
import drinkImage from '../assets/products/1.jpg'
import banner from '../assets/products/Easy.jpg'
import Cirl
export default function Homepage() {
  return (
    <View style={styles.container}>
      <View style={styles.storeItems}>
 
      </View>
      <View style={styles.banner}>
      <Image source={banner}   style={{width:'90%', height:'150px',alignSelf:'center'}}/>
      </View>

        <View style={styles.food}>
        <Image source={drinkImage}   style={{width:'90%', height:'150px',alignSelf:'center'}}/>
          
          <Text style={{alignSelf:'center'}}>food sec</Text>
        </View>

        <View style={styles.drinks}>
        <Image source={foodImage}   style={{width:'90%', height:'150px',alignSelf:'center'}}/>
           <Text  style={{alignSelf:'center'}}>Refreshments section</Text>

        </View>
        <CircleButton
          size={45}
          primaryColor="#41727E"
          secondaryColor="#459186"
          onPressButtonTop={
            () => alert('Top Button Clicked')
          }
          onPressButtonRight={
            () => alert('Right Button Clicked')
          }
          onPressButtonBottom={
            () => alert('Bottom Button Clicked')
          }
          onPressButtonLeft={
            () => alert('Left Button Clicked')
          }
        />
     

    </View>
  )
}

const styles = StyleSheet.create({
  container:{
   flex:1,
    alignItems: 'center',
    backgroundColor: 'red',
  },

  storeItems:{
    paddingTop:'30%'
  },
  food:{
    width:'100%',
    paddingTop:'20%'
  },
  drinks:{
    width:'100%'
  },
  banner:{
    width:'100%'
  }

});