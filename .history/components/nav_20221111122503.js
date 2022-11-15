import { StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { CartIcon } from '../components/CartIcon'
import { faChevronLeft } from '@fortawesome/free-solid-svg-icons';
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { solid, regular, brands, icon } from '@fortawesome/fontawesome-svg-core/import.macro'
export default function Nav({navigation}) {
  return (
    <View style={styles.storeItems}>
        <FontAwesomeIcon icon={regular('coffee')} />
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
    paddingTop: '2%',

    borderColor: 'black'

  },

})