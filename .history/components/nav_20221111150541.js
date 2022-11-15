import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { CartIcon } from '../components/CartIcon'


export default function Nav({ navigation }) {
  return (
    <View style={styles.storeItems}>
        <TouchableOpacity>

        </TouchableOpacity>
     
     
       
       
     

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