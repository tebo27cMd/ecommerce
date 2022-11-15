import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { CartIcon } from '../components/CartIcon'


export default function Nav({ navigation }) {
  return (
    <View style={styles.storeItems}>

        <Icon
        // style={{ alignSelf: 'flex-start' ,width:'20%'}}
          name='arrow-back'
          type='ionicons'
          color='#FA4A0C'
          
        />

  
        <Icon
          // style={{ paddingLeft: '40%' ,paddingBottom: '9%',}}
          name='person'
          type='ionicons'
          color='#FA4A0C'
        />
        <CartIcon navigation={navigation} />

     

    </View>
  )
}

const styles = StyleSheet.create({
  storeItems: {
    ju
    paddingTop: '2%',
backgroundColor:'black',
    borderColor: 'black',
    height:'25%'
  },

})