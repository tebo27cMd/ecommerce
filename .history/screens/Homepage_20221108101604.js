import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Homepage() {
  return (
    <View       style={styles.container}>
      <View       style={styles.topContainer}>
      <Text>top</Text>
      </View>
      <View       style={styles.midContainer}>
      <Text>mid</Text>
      </View>
      <View       style={styles.lowContainer}>
      <Text>low</Text>
      </View>
    
    </View>
  )
}

const styles = StyleSheet.create({
  container :{
flex:1,
backgroundColor:''
  },
  topContainer
  :{
    flex:1
      },
      midContainer:{
        flex:8
      },
      lowContainer:{
        flex:1
      }
})