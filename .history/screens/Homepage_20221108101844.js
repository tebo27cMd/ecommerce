import { StyleSheet, Text, View ,SafeAreaView,ScrollView,Image} from 'react-native'
import React from 'react'

export default function Homepage() {
  return (
    <SafeAreaView>
      <ScrollView>
        
        <View style={styles.}>
    
        </View>
      </ScrollView>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container :{
flex:1,
backgroundColor:'blue'
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