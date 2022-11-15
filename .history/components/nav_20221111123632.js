import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { CartIcon } from '../components/CartIcon'


export default function Nav({ navigation }) {
  return (
    <View style={styles.storeItems}>

      <Icon

        name='arrow-back'
        type='ionicons'
        color='#FA4A0C'
      />
      <View>
         <CartIcon navigation={navigation} style={{  }} />
        <Icon
    style={{paddingLeft:'20%' alignSelf: 'flex-end' }}
          name='person'
          type='ionicons'
          color='#FA4A0C'
        />
       

      </View>

    </View>
  )
}

const styles = StyleSheet.create({
  storeItems: {
    paddingTop: '2%',

    borderColor: 'black'

  },

})