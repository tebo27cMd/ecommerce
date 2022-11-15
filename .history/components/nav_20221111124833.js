import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { CartIcon } from '../components/CartIcon'


export default function Nav({ navigation }) {
  return (
    <View style={styles.storeItems}>

        <Icon
        style={{ alignSelf: 'flex-start' ,width:'20%'}}
          name='arrow-back'
          type='ionicons'
          color='#FA4A0C'
          
        />

  
        <Icon
          style={{ paddingLeft: '40%' ,paddingBottom: '9%',}}
          name='person'
          type='ionicons'
          color='#FA4A0C'
        />
        <CartIcon navigation={navigation} style={{ alignSelf: 'flex-end' }} />

     

    </View>
  )
}

const styles = StyleSheet.create({
  storeItems: {
    paddingTop: '2%',
backgroundColor:'black',
    borderColor: 'black',
    he
  },

})