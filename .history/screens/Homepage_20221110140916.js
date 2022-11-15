import { StyleSheet, Text, View, ImageBackground, ScrollView, Image, Link, TouchableOpacity } from 'react-native'
import React from 'react'
import foodImage from '../assets/products/5.jpg'
import drinkImage from '../assets/products/1.jpg'
import banner from '../assets/products/Easy.jpg'
import bg from '../assets/products/backg.jpg'

export default function Homepage({navigation}) {
  return (
    <ImageBackground source={b} style={styles.container}>
      <View style={styles.storeItems}>

      </View>
      <View style={styles.banner}>
        <View style={styles.imageContainer}>
          <Image source={banner} style={{ width: '90%', height: '150px', alignSelf: 'center', borderRadius: '10px' }} />
        </View>

        <View style={styles.bannerBox}>
          <Text style={styles.bannerText}>Choose From </Text>
          <Text style={{ alignSelf: 'center' }}> Our </Text>
          <Text style={{ alignSelf: 'center' }}>Wholesome Meals</Text>
          <Text style={{ alignSelf: 'center' }}>and</Text>
          <Text style={{ alignSelf: 'center' }}>Refreshments</Text>

        </View>

      </View>

      <TouchableOpacity style={styles.food}  onPress={() => navigation.navigate('Products')}>
        <Image source={foodImage} style={{ width: '90%', height: '150px', alignSelf: 'center', borderRadius: '27px' }} />

        <Text style={{ alignSelf: 'center' }}>food sec</Text>
      </TouchableOpacity>




      <TouchableOpacity style={styles.drinks}  onPress={() => navigation.navigate('Products')}>
        <Image source={drinkImage} style={{ width: '90%', height: '150px', alignSelf: 'center', borderRadius: '27px' }} />
        <Text style={{ alignSelf: 'center' }}>Refreshments section</Text>

      </TouchableOpacity>



    </ImageBackground>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',

  },
  bannerBox: {
    borderColor: 'orange',
    alignSelf: 'center',
    width: "70%",
    top: '10%',
    borderBottomWidth: '1px',
    borderTopWidth: '1px'


  },

  storeItems: {
    paddingTop: '7%',

    borderColor: 'black'

  },
  food: {
    width: '100%',
    paddingTop: '16%'
  },
  drinks: {
    width: '100%'
  },
  banner: {
    width: '100%'
  },
  bannerText: {
    paddingTop: '20px',
    textAlign: 'center',
  },
  imageContainer: {
    borderRadius: '20px'

  }

});