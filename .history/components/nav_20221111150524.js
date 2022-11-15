import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { CartIcon } from '../components/CartIcon'


export default function Nav({ navigation }) {
  return (
    <View style={styles.storeItems}>
        <
      <Icon
        style={{ alignSelf: 'flex-start', marginHorizontal: 5,paddingTop:'50%' }}
        name='arrow-back'
        type='ionicons'
        color='#FA4A0C'
        onPress={() => {navigation.goBack();}}
      />
     
       
       
     

      <CartIcon navigation={navigation}    style={{ alignSelf: 'flex-end', paddingTop:'50%'}} />





    </View>
  )
}

const styles = StyleSheet.create({
  storeItems: {
    flexDirection: 'row',
  justifyContent:'space-between',

  paddingBottom:'7%',
  backgroundColor:'#FDB69D'
  

  },

})