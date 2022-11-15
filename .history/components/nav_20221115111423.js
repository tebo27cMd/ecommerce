import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { CartIcon } from '../components/CartIcon'
import { useNavigation } from '@react-navigation/native';
import { auth } from '../config/firebase';


export default function Nav() {
  const navigation = useNavigation();
  const signOut = async()=>{
    auth
    .signOut()
    .then(() => console.log('User signed out!'));
    navigation.push('LoginPage')
    setVisible(false);
    
}
  return (
    <View style={styles.storeItems}>
      <TouchableOpacity onPress={() =>navigation.goBack()}>
        <Icon
          style={{ alignSelf: 'flex-start', marginHorizontal: 5, paddingTop: '50%' }}
          name='arrow-back'
          type='ionicons'
          color='#FA4A0C'
          
        />
      </TouchableOpacity>







<TouchableOpacity onPress={() =>signOut()}>

<Icon
        style={{ alignSelf: 'flex-end',marginHorizontal: 5,paddingTop: '50%'}}   
    name='logout'
    type='ionicons'
    color='#FA4A0C'
    
  />
   </TouchableOpacity>




      


    </View>
  )
}

const styles = StyleSheet.create({
  storeItems: {

    flexDirection: 'row',
    justifyContent: 'space-between',

    paddingBottom: '7%',
    backgroundColor: '##fff6f2'
  },

})