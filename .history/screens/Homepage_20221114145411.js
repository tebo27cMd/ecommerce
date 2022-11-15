import { StyleSheet, Text, View, ImageBackground, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import foodImage from '../assets/products/5.jpg'
import drinkImage from '../assets/products/1.jpg'
import banner from '../assets/products/Easy.jpg'
import bg from '../assets/products/bgi5.jpg'
import { Icon } from 'react-native-elements';
import { CartIcon } from '../components/CartIcon'
import Nav from '../components/nav'
export default function Homepage({navigation}) {
  return (
    <ImageBackground style={styles.container} source={bg} >
      <View style={styles.storeItems}>
          <Nav/>   
      </View>
      <View style={styles.banner}>
        <View style={styles.imageContainer}>
          <Image source={banner} style={{ width: '90%', height: '150px', alignSelf: 'center', borderRadius: '10px', boxShadow: '#4B1603 5px 7px 8px -2px;', }} />
        </View>

        <View style={styles.bannerBox}>
          <View style={{   backgroundColor:'#FFFEFF' }}>
          <Text style={styles.bannerText}>Choose From </Text>
          <Text style={{ alignSelf: 'center' }}> Our </Text>
          <Text style={{ alignSelf: 'center' , fontWeight:'bold'  }}>Wholesome Meals</Text>
          <Text style={{ alignSelf: 'center' }}>and</Text>
          <Text style={{ alignSelf: 'center', fontWeight:'bold'  }}>Refreshments</Text>

          </View>
         

        </View>

      </View>
      <TouchableOpacity style={styles.drinks}  onPress={() => navigation.navigate('Products')}>
        <Image source={drinkImage} style={{ width: '90%', height: '5000%', alignSelf: 'center', borderRadius: '27px' }} />
        
        <View style={styles.typeText}>
        <Text style={{ alignSelf: 'center', fontWeight:'bold'}}>START ORDER</Text>
        </View>
      </TouchableOpacity>



    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  typeText:{
    borderBottomWidth: '2px',
   borderBottomEndRadius:'7px',
   borderBottomColor:'#f67c31',
    alignSelf: 'center',
    width: "70%",
    top:'3%'
 
  },
  container: {
   
    flex: 1,
    // alignItems: 'center',

  },
  bannerBox: {
    // boxShadow: '#4B1603 9px 7px 7px -7px;',
    borderColor: 'orange',
    alignSelf: 'center',
    width: "70%",
    top: '10%',
    borderBottomWidth: '2px',
    borderTopWidth: '2px',
    opacity: 0.7  ,
   
    backgroundColor:'#FFFEFF'


  },

  storeItems: {
    boxShadow: '#4B1603 5px 7px 8px -2px;',
    // paddingBottom: '2%',
    
    borderColor: 'black'

  },
  food: {
    width: '100%',
    paddingTop: '16%',
    paddingBottom:'9%',

  },
  drinks: {
    paddingTop: '16%',
    width: '100%'
  },
  banner: {
    paddingTop: '4%',
    width: '100%'
  },
  bannerText: {

    paddingTop: '20px',
    textAlign: 'center',
  },
  imageContainer: {
    borderRadius: '20px'

  },


});