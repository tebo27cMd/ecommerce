import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { CartIcon } from '../components/CartIcon'


export default function Nav({ navigation }) {
  return (
    <View style={styles.storeItems}>
  <View style={{ alignSelf: 'flex-start', marginHorizontal: 5,width:'40%'}}>
  <Icon
        
          name='arrow-back'
          type='ionicons'
          color='#FA4A0C'
          
        />

  </View>
  <View>
  <Icon
      style={{ alignSelf: 'flex-end', marginHorizontal: 5}}
          name='person'
          type='ionicons'
          color='#FA4A0C'
        />
         <CartIcon navigation={navigation}       />
  </View>
   

  
      


     

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