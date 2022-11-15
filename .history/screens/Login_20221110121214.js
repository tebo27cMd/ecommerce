import React from 'react';
import react from 'react'
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
import pic1 from '../assets/products/ggle.png'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import { auth } from '../config/firebase';
import { signInWithEmailAndPassword, GoogleAuthProvider ,signInWithPopup} from 'firebase/auth';

const Stack = createNativeStackNavigator();
const provider = new GoogleAuthProvider();


export default function Login({ navigation }) {
  const [email,setEmail]=React.useState('');
  const [password,setPass]=React.useState('');
  

  const login = (()=>{

    signInWithEmailAndPassword(auth, email, password).then(()=>{
      navigation.push('Home');
    }).catch((err)=>{

        console.log(err);
    })
    
})


const LoginWithGoogle =() =>{
  signInWithPopup(auth,provider).
  then((result)=>{
    console.log ((result));
    navigation.push("Home")
 
  }).catch ((error)=>{
    console.log(error)
  })

}

  return (
    <TouchableWithoutFeedback style={styles.mainContainer} onPress={() => Keyboard.dismiss()}>
      <View style={styles.container}>
        <View >
          <Image
            style={{ flex: 1, width: '100%',height:'500px', top:'10%',marginTop: -300, resizeMode: 'center' }}
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
            <View style={{height:'50px',borderBottomWidth:'1', borderBottomColor:'#FA4A0C'}}>
            <Text style={styles.loginText}>Login</Text>


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
              onChangeText={(email)=>setEmail(email)}

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
              onChangeText={(pass)=>setPass(pass)}
              secureTextEntry={true}
              autoCapitalize='none'
        
            />
          </View>
          <View style={styles.forget}>
          <TouchableOpacity style={styles.for}
          // onPress={() => navigation.push('forgotPassword')}
          >
            <Text style={styles.textForget}>Forgot password?</Text>
          </TouchableOpacity>

        </View>
          <Text style={styles.fpText}></Text>
          <TouchableOpacity style={styles.loginButton}>
            <Text style={styles.loginButtonText}>Login</Text>
          </TouchableOpacity>

          <TouchableOpacity style={styles.registerLink} 
         
             title="login"
             onPress={() => navigation.navigate('Register')}>
                <Text style={styles.regText}>Don't have an account? Register here </Text>
             
  
          </TouchableOpacity>
          <TouchableOpacity    >
              
              <Image
                 source={pic1}
                 style={{width:'30px', height:'30px',alignSelf:'center',top:'12px'}}
                
                />
        
              </TouchableOpacity>
        
          

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
    // flex: 11,
    height:'40%',
    backgroundColor: '#fed9cc',
    borderBottomLeftRadius:'20px',
    borderBottomRightRadius:'20px',
  

  },
  forget:{
    marginTop:10,
    flexDirection:'row',
    justifyContent:'flex-end',

  },
  textForget:{
    color: 'orange',
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
    // paddingBottom: 80,
    paddingHorizontal: 20,
  },
  loginText: {
    color:'#FA5C24',
    alignSelf:'flex-end',
    fontFamily: 'SourceSansProBold',
    fontSize: 24,
    marginTop: 13,

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
    borderBottomWidth:1,
    borderBottomColor:'#fed9cc',
    borderBottomEndRadius:'7px',
 
  },
  loginButton: {
    backgroundColor: '#FA5C24',
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


