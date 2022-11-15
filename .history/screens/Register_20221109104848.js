import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  Image,
  TextInput,
  TouchableOpacity,
  TouchableWithoutFeedback,
  Dimensions,
  Keyboard,
  Button
} from 'react-native';
// import backgroundPicture from '../assets/Easy.jpg'
// import backgroundPicture2 from '../assets/banner1.jpg'
import backgroundPicture from '../assets/products/Easy.jpg'
import backgroundPicture2 from '../assets/products/banner1.jpg'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import googleLogo from '../assets/products/google.png'

const Stack = createNativeStackNavigator();
// // expo install expo-font
// import { useFonts } from 'expo-font';

// // https://fonts.google.com/specimen/Source+Sans+Pro
// import SourceSansProLight from '../../assets/fonts/SourceSansPro/SourceSansProLight.ttf';
// import SourceSansProRegular from '../../assets/fonts/SourceSansPro/SourceSansProRegular.ttf';
// import SourceSansProBold from '../../assets/fonts/SourceSansPro/SourceSansProBold.ttf';

// // npm install react-native-elements
import { Icon } from 'react-native-elements';

// // npm install react-native-animatable
import * as Animatable from 'react-native-animatable';

export default function Register({ navigation }) {

  //   const [loaded] = useFonts({
  //     SourceSansProLight,
  //     SourceSansProRegular,
  //     SourceSansProBold,
  //   });

  //   if (!loaded || !BackgroundImage) {
  //     return <Text>Loading...</Text>;
  //   }

  return (
    <TouchableWithoutFeedback style={styles.mainContainer} onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View >
          <Image
            style={{ flex: 1, width: '100%',height:'500px', top:'10%',marginTop: -300, resizeMode: "contain" }}
            source={backgroundPicture}
          />
          <Image
            style={{ flex: 1, width: "100%",height:'180px', marginTop: -900, resizeMode: "contain" }}
            source={backgroundPicture2}
          />
        </View>
        <Animatable.Text
          style={styles.titleText}
          animation='fadeInUp'
          delay={1200}
        >EAT
        </Animatable.Text>
        <View style={styles.bottomView}>
          <Text style={styles.loginText}>Register</Text>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='person'
              type='ionicons'
              color='#FA4A0C'
            />
            <TextInput
              style={styles.input}
              placeholder='Username'
              autoCapitalize='none'
              keyboardType='Username'
              textContentType='Username'
            />
          </View>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='mail'
              type='ionicons'
              color='#FA4A0C'
            />
            <TextInput
              style={styles.input}
              placeholder='Email'
              autoCapitalize='none'
              keyboardType='email-address'
              textContentType='emailAddress'
            />
          </View>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='lock'
              type='ionicons'
              color='#FA4A0C'
            />
            <TextInput
              style={styles.input}
              placeholder='Password'
              secureTextEntry={true}
              autoCapitalize='none'
            />
          </View>
          <View style={styles.inputView}>
            <Icon
              style={styles.inputIcon}
              name='lock'
              type='ionicons'
              color='#FA4A0C'
            />
            <TextInput
              style={styles.input}
              placeholder='Confirm Password'
              secureTextEntry={true}
              autoCapitalize='none'
            />
          </View>
          <Text style={styles.fpText}></Text>
          <TouchableOpacity style={styles.loginButton}
          onPress={() => navigation.navigate('register')}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerLink} 
         
             title="register"
             onPress={() => navigation.navigate('register')}>
                <Text style={styles.regText}>Already have an account? Login </Text>
             
  
          </TouchableOpacity>
          <View>
            <TouchableOpacity>
                <Im
            </TouchableOpacity>
          </View>

        </View>
      </View>
    </TouchableWithoutFeedback>
  );
}

const styles = StyleSheet.create({
    mainContainer:{
        flex: 1,
        backgroundColor: 'white', 
       
    },
  container: {
    flex: 11,
    backgroundColor: '#fed9cc',
    borderBottomLeftRadius:'20px',
    borderBottomRightRadius:'20px',
  

  },
  titleText: {
    position: 'absolute',
    top: Dimensions.get('screen').height * 0.1,
    alignSelf: 'center',
    color: '#fff',
    fontFamily: 'SourceSansProBold',
    fontSize: 60,
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 8,
    },
    shadowOpacity: 0.44,
    shadowRadius: 10.32,
    elevation: 16,
  },
  bottomView: {
 
    opacity: 0.95,
 
    top:"100%",
    bottom: 0,
    left: 0,
    right: 0,
    borderTopLeftRadius: 30,
    borderTopRightRadius: 30,
    paddingTop: 0,
    paddingBottom: 80,
    paddingHorizontal: 20,
  },
  loginText: {
    fontFamily: 'SourceSansProBold',
    fontSize: 24,
    marginTop: 12,
    marginBottom: 4,
  },
  inputView: {
    height: 40,
    borderRadius: 10,
    backgroundColor: '#f1f3f6',
    marginTop: 10,
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
  },
  inputIcon: {
    paddingHorizontal: 8,
  },
  input: {
    height: 40,
    flex: 1,
    fontFamily: 'SourceSansProRegular',
    fontSize: 16,
    color: '#333',
  },
  loginButton: {
    backgroundColor: '#FA4A0C',
    paddingVertical: 10,
    borderRadius: 8,
    marginTop: 10,
  },
  registerLink:{

     color:'white',
     marginTop: 9,


  },
  loginButtonText: {
    color: '#fff',
    fontFamily: 'SourceSansProBold',
    alignSelf: 'center',
    fontSize: 18,
  },
  registerText: {
    alignSelf: 'center',
    marginTop: 12,
    fontFamily: 'SourceSansProRegular',
    fontSize: 16,
  },
  fpText: {
    marginTop: 10,
    alignSelf: 'flex-end',
    fontFamily: 'SourceSansProBold',
    fontSize: 16,
    color: '#FA4A0C',
  },
  regText:{
    marginTop: 10,
  textAlign:'center',
    fontFamily: 'SourceSansProBold',
    fontSize: 16,
    color: '#FA4A0C',
  },
});


