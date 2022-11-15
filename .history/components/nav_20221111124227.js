import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { CartIcon } from '../components/CartIcon'


export default function Nav({ navigation }) {
  return (
    <View style={styles.storeItems}>
      <View>
        <Icon
        style={{ alignSelf: 'flex-start' ,top:'5%'}}
          name='arrow-back'
          type='ionicons'
          color='#FA4A0C'
          
        />

      </View>


      <View>
        <Icon
          style={{ paddingLeft: '40%' }}
          name='person'
          type='ionicons'
          color='#FA4A0C'
        />
        <CartIcon navigation={navigation} style={{ alignSelf: 'flex-end' }} />

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