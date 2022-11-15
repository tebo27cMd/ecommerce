import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { Icon } from 'react-native-elements';
import { CartIcon } from '../components/CartIcon'
export default function Nav({navigation}) {
  return (
    <View style={styles.storeItems}>
        <TouchableOpacity 
                onPress={() => {navigation.goBack();}}
                >
                    <FontAwesomeIcon icon={faChevronLeft} style={{width:20,height:20,color:'white'}} />
            </TouchableOpacity>
            <Icon
              style={{alignSelf:'flex-start'}}
              name='person'
              type='ionicons'
              color='#FA4A0C'
            />
      <CartIcon navigation={navigation}  style={{alignSelf:'flex-end'}}/>
      
    </View>
  )
}

const styles = StyleSheet.create({
  storeItems: {
    paddingTop: '3%',

    borderColor: 'black'

  },

})