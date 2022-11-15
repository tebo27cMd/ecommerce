import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { CartIcon } from '../components/CartIcon'


export default function Nav({ navigation }) {
  return (
    <View style={styles.storeItems}>

      <Icon
        style={{ alignSelf: 'flex-start', marginHorizontal: 5, width: '70%' }}
        name='arrow-back'
        type='ionicons'
        color='#FA4A0C'

      />
      <View    >
        <Icon

          name='person'
          type='ionicons'
          color='#FA4A0C'
        />
       
      </View>

      <CartIcon navigation={navigation}    style={{ alignSelf: 'flex-end',p }} />





    </View>
  )
}

const styles = StyleSheet.create({
  storeItems: {
    flexDirection: 'row',

    backgroundColor: 'black',
    borderColor: 'black',

  },

})