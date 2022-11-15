import { StyleSheet, Text, View, SafeAreaView, ScrollView, Image } from 'react-native'
import React from 'react'
import foodImage from './'
export default function Homepage() {
  return (
    <SafeAreaView>
      <View style={styles.main}>
        <View style={styles.food}>


        </View>
        <View style={styles.drinks}>


        </View>
      </View>

    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
 main : {
backgroundColor:'red',
  top:'20%'
  },
  food: {

  },
});