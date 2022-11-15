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
          style={{ alignSelf: 'flex-start', marginHorizontal: 5, paddingTop: '80%' }}
          name='arrow-back'
          type='ionicons'
          color='#FA4A0C'
          
        />
      </TouchableOpacity>




<View style={{flexDirection:'column' ,paddingRight:'0%',width:'50%',bottom:'4%'}}>
<CartIcon navigation={navigation}        />
<TouchableOpacity onPress={() =>signOut()}>
<Icon
        style={{paddingLeft:'80%'}}   
    name='logout'
    type='ionicons'
    color='#FA4A0C'
    
  />
   </TouchableOpacity>


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