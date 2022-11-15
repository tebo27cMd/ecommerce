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
import pic1 from '../assets/products/ggle.png'
import { createNativeStackNavigator } from '@react-navigation/native-stack';
import { Icon } from 'react-native-elements';
import * as Animatable from 'react-native-animatable';
import {auth} from '../firebase'
import {createUserWithEmailAndPassword, updateProfile, GoogleAuthProvider ,signInWithPopup} from 'firebase/auth';

const provider = new GoogleAuthProvider();


export default function Register({ navigation }) {
  const [uid,setUid]=React.useState('');
    const [email,setEmail]=React.useState('');
    const [password,setPass]=React.useState('');
    const [user,setUser]=React.useState('');
    const [confirmPassword,setConfirmedPassword]=React.useState('');


  const register = ({navigation})=>{

    createUserWithEmailAndPassword(auth, email, password).then(async(userCredential)=>{

      const displayName = uid;
      setUser(()=>({...userCredential.user}));

       updateProfile(auth.currentUser, {displayName:displayName}).then().catch();
      alert(displayName+ "successfully")
      navigation.push('Login')
  }).catch((error)=>{
      alert(error);
      console.log(error)
  })
  
}


const RegisterWithGoogle =() =>{
  signInWithPopup(auth,provider).
  then((result)=>{
    console.log ((result));
    navigation.push("Login")
 
  }).catch ((error)=>{
    console.log(error)
  })

}


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
            <View style={{height:'50px',borderBottomWidth:'1', borderBottomColor:'#FA4A0C'}}>
            <Text style={styles.loginText}>Register</Text>
            <Text style={{alignSelf:'flex-end',paddingRight:'34px'}}>with</Text>
            <TouchableOpacity>
              
            <Image
               source={pic1}
               style={{width:'30px', height:'30px',alignSelf:'flex-end',bottom:'43px'}}
              
              />
                 {/* <Icon
             style={{alignSelf:'flex-end',bottom:'1px'}}
              name='google'
              type='ionicons'
              color='#FA4A0C'
            /> */}
            </TouchableOpacity>
            </View>
        
          
        
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
              onChangeText={(uid)=>setUid(uid)}
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
              secureTextEntry={true}
              autoCapitalize='none'
              onChangeText={(password)}
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
    height:'70%',
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
    // paddingBottom: 80,
    paddingHorizontal: 20,
  },
  loginText: {
    alignSelf:'flex-start',
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


