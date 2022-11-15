import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { CartIcon } from '../components/CartIcon'


export default function Nav({navigation}) {
  return (
    <View style={styles.storeItems}>
      <View>
        
      </View>
      <Icon
  
              name='arrow-back'
              type='ionicons'
              color='#FA4A0C'
            />
        
      
    </View>
  )
}

const styles = StyleSheet.create({
  storeItems: {
    paddingTop: '2%',

    borderColor: 'black'

  },

})