import { StyleSheet, Text, View, TouchableOpacity } from 'react-native'
import React from 'react'
import { Icon } from 'react-native-elements';
import { CartIcon } from '../components/CartIcon'
import { useNavigation } from '@react-navigation/native';
import ConfirmationPopup from "../components/modal";


export default function Nav() {
  const navigation = useNavigation();
  const [visible, setVisible] = React.useState(false);

  const signOut = async () => {
    auth
      .signOut()
      .then(() => console.log('User signed out!'));
    navigation.push('LoginPage')
    setVisible(false);

  }
  const confirmSignOut = async () => {
    setVisible(true);
  }
  const close = () => {
    setVisible(false);

  };

  return (
    <View style={styles.storeItems}>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icon
          style={{ alignSelf: 'flex-start', marginHorizontal: 5, paddingTop: '80%' }}
          name='arrow-back'
          type='ionicons'
          color='#FA4A0C'

        />
      </TouchableOpacity>




      <View style={{ flexDirection: 'column', paddingRight: '0%', width: '50%' }}>
        <CartIcon navigation={navigation} />

        <Icon
          style={{ paddingLeft: '80%' }}
          name='logout'
          type='ionicons'
          color='#FA4A0C'

        />


      </View>
      <ConfirmationPopup visible={visible}>
        <Image
          source={modalImage}
          style={{ width: 50, height: 50, alignSelf: "center" }}
        />
        <Text
          style={{ marginVertical: 30, fontSize: 20, textAlign: "center" }}
        >
          You are about to be signed out, Do you want to continue?
        </Text>
        <View style={{ flexDirection: 'row', justifyContent: 'space-between' }}>
          <TouchableOpacity style={{ backgroundColor: "#f3f5f6", width: 80, height: 30, borderRadius: 20, textAlign: 'center', justifyContent: 'center' }} onPress={() => close()}>
            <Text>Cancel</Text>
          </TouchableOpacity>
          <TouchableOpacity style={{ backgroundColor: "rgb(255,240,242)", width: 80, height: 30, borderRadius: 20, textAlign: 'center', justifyContent: 'center' }} onPress={() => signOut()}>
            <Text>Logout</Text>
          </TouchableOpacity>
        </View>
      </ConfirmationPopup>
      <TouchableOpacity onPress={confirmSignOut}>
        <Icon
          style={{     color: 'white', }}
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
    backgroundColor: '#FDB69D'


  },

})