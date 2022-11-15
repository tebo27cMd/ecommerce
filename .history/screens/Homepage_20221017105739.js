import React from "react";
import { SafeAreaView,View,ScrollView,StyleSheet, } from "react-native";
import * as Animatable from 'react-native-animatable';
import Icon from 'react-native-vector-icons/FontAwesome';


export default function Homepage(){
    return(
        <SafeAreaView style={styles.container}>
            <View style={styles.topNav}>
            <Icon
                    style={styles.inputIcon}
                    size="xxs"
                    name='bars'
                     type='ionicons'
                  color='#FA4A0C'
               />
                <Icon
                     style={styles.cartIcon}
                    size="xxs"
                    name='shopping-cart'
                     type='ionicons'
                    color='#FA4A0C'
                 />
                 <Animatable.Text
                     style={styles.titleText}
                     animation='fadeInUp'
                     delay={1200}
                 ><Text>
                        <Text style={styles.header1}>Delicious</Text>
                         {"\n"}
                         <Text style={styles.header2} >  <View
                          style={{
                              borderBottomColor: 'blue', }}
                        /> food for you</Text>

                     </Text>                 </Animatable.Text>
                <View style={styles.searchView}>
                    <TextInput style={styles.searchBar}
                        placeholder={'search...'}>

                    </TextInput>
</View>
            </View>
            <View  style={styles.body}>

            </View>
            <View  style={styles.bottomNav}>

            </View>

        </SafeAreaView>
    )
}

const styles=StyleSheet.create({
    container:{
        backgroundColor:'black',
        flex:1
    },
    topNav:{
        flex:1,
        backgroundColor:'red'
    },
    body:{
        flex:10,
        backgroundColor:'pink'
    },
    bottomNav:{
        flex:1
    }
})











































// import React, { useEffect, useState, useContext } from 'react';
// import {
//     TextInput,
//     Text,
//     Image,
//     View,
//     ScrollView,
//     SafeAreaView,
//     Button,
//     StyleSheet,
//     TouchableOpacity
// } from 'react-native';
// import pic1 from '../assets/products/1.jpg'
// import * as Animatable from 'react-native-animatable';
// import { getProduct } from '../services/ProductsService.js';
// import { CartContext } from '../CartContext';
// import Icon from 'react-native-vector-icons/FontAwesome';
// import { Touchable } from 'react-native-web';

// export default function Homepage() {
//     return (
//         <SafeAreaView style={styles.container}>
//             <View style={styles.cont} onPress={() => Keyboard.dismiss()}>

//                 <Icon
//                     style={styles.inputIcon}
//                     size="xxs"
//                     name='bars'
//                     type='ionicons'
//                     color='#FA4A0C'
//                 />
//                 <Icon
//                     style={styles.cartIcon}
//                     size="xxs"
//                     name='shopping-cart'
//                     type='ionicons'
//                     color='#FA4A0C'
//                 />
//                 <Animatable.Text
//                     style={styles.titleText}
//                     animation='fadeInUp'
//                     delay={1200}
//                 ><Text>
//                         <Text style={styles.header1}>Delicious</Text>
//                         {"\n"}
//                         <Text style={styles.header2} >  <View
//                             style={{
//                                 borderBottomColor: 'blue',
//                             }}
//                         /> food for you</Text>

//                     </Text>
//                 </Animatable.Text>
//                 <View style={styles.searchView}>
//                     <TextInput style={styles.searchBar}
//                         placeholder={'search...'}>

//                     </TextInput>

//                 </View>
//             </View>
//             <View></View>
//             <ScrollView style={styles.displayMenu}>
                
//             </ScrollView>
//             <View></View>

        

//             <View style={styles.nav}>
//                 <View style={styles.homeIcon}>
//                     <Icon
//                         style={styles.inputIcon}
//                         size="large"
//                         name='home'
//                         type='ionicons'
//                         color='#FA4A0C'
//                     />

//                 </View>
//                 <View style={styles.profileIcon}>
//                     <Icon
//                         style={styles.inputIcon}
//                         size="large"
//                         name='user'
//                         type='ionicons'
//                         color='#FA4A0C'
//                     />

//                 </View>
//                 <View style={styles.historyIcon}>
//                     <Icon
//                         style={styles.inputIcon}
//                         size="large"
//                         name='history'
//                         type='ionicons'
//                         color='#FA4A0C'
//                     />

//                 </View>

//             </View>


//         </SafeAreaView>

//     )
// }

// const styles = StyleSheet.create({
//     container: {
//         flex: 10,
//         backgroundColor: 'blue',
   
     


//     },
//     inputIcon: {
//         marginTop: 20,
//         paddingVertical: 12,

//         paddingLeft: 12,
//     },
//     cartIcon: {
//         alignSelf: 'flex-end',
//         marginTop: -20,
//         paddingVertical: -12,
//         paddingRight: 12,
//     },
 
//     header1: {
//         color: '#FA4A0C',
//         fontFamily: 'SourceSansProRegular',
//         fontSize: 30,

//     },
//     header2: {

//         fontSize: 16,
//     },
//     searchBar: {
//         marginTop: 20,
//         backgroundColor: '#FFE1D7',
//         borderRadius: '9px',
//         alignSelf: 'center',
//         width: '314px',
//         height: '40px',
//         paddingLeft: '30px',
//         shadowColor: 'black',
//         shadowOffset: { width: -2, height: 4 },
//         shadowOpacity: 0.2,
//         shadowRadius: 3,


//     },
//     nav: {
       
//         backgroundColor:'purple',
       
//         flexDirection: 'row',
//         justifyContent: 'space-evenly'
//     }



// })





