import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { CartIcon } from '../components/CartIcon'


export default function Nav({ navigation }) {
  return (
    <View style={styles.storeItems}>
  <View>
  <Icon
        
          name='arrow-back'
          type='ionicons'
          color='#FA4A0C'
          
        />

  </View>
   

  
        <Icon
     
          name='person'
          type='ionicons'
          color='#FA4A0C'
        />
        <CartIcon navigation={navigation}  />

     

    </View>
  )
}

const styles = StyleSheet.create({
  storeItems: {
flexDirection:'row',

backgroundColor:'black',
    borderColor: 'black',
   
  },

})