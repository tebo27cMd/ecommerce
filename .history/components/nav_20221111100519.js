import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';

export default function nav() {
  return (
    <View>
            <Icon
              style={{alignSelf:'flex-start'}}
              name='person'
              type='ionicons'
              color='#FA4A0C'
            />
      <CartIcon navigation={navigation}  style={{alignSelf:'flex-end'}}/>
      
    </View>
  )
}

const styles = StyleSheet.create({})