import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { CartIcon } from '../components/CartIcon'



export default function Nav({ navigation}) {

  return (
    <View style={styles.storeItems}>
      <TouchableOpacity onPress={() =>navigation.goBack()}>
        <Icon
          style={{ alignSelf: 'flex-start', marginHorizontal: 5, paddingTop: '85%' }}
          name='arrow-back'
          type='ionicons'
          color='#FA4A0C'
          
        />
      </TouchableOpacity>




<View style={{flexDirection:'column' ,paddingRight:'0%',width:'50%'}}>
<CartIcon navigation={navigation}        />

<Icon
        style={{paddingLeft:'0%',paddingBottom:'7%' }}   
    name='logout'
    type='ionicons'
    color='#FA4A0C'
    
  />


</View>

      


    </View>
  )
}

const styles = StyleSheet.create({
  storeItems: {
    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingBottom: '7%',
    backgroundColor: '#FDB69D'


  },

})