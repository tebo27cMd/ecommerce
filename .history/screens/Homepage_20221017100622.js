import React, { useEffect, useState, useContext } from 'react';
import {
    TextInput,
    Text,
    Image,
    View,
    ScrollView,
    SafeAreaView,
    Button,
    StyleSheet,
    TouchableOpacity
} from 'react-native';
import pic1 from '../assets/products/1.jpg'
import * as Animatable from 'react-native-animatable';
import { getProduct } from '../services/ProductsService.js';
import { CartContext } from '../CartContext';
import Icon from 'react-native-vector-icons/FontAwesome';
import { Touchable } from 'react-native-web';

export default function Homepage() {
    return (
       
    )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#EDEDED'
    },
    container: {
        flex: 1,
        backgroundColor: '#EDEDED',
        position: 'relative',
        maxHeight: '100%',
        maxWidth: '100%',


    },
    inputIcon: {
        marginTop: 20,
        paddingVertical: 12,

        paddingLeft: 12,
    },
    cartIcon: {
        alignSelf: 'flex-end',
        marginTop: -20,
        paddingVertical: -12,
        paddingRight: 12,
    },
    headerText: {
        position: 'absolute',
        width: '353px',
        height: '41px',
        left: '50px',
        top: '132px'
    },

    header1: {
        color: '#FA4A0C',
        fontFamily: 'SourceSansProRegular',
        fontSize: 30,

    },
    header2: {

        fontSize: 16,
    },
    searchBar: {
        marginTop: 20,
        backgroundColor: '#FFE1D7',
        borderRadius: '9px',
        alignSelf: 'center',
        width: '314px',
        height: '40px',
        paddingLeft: '30px',
        shadowColor: 'black',
        shadowOffset: { width: -2, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 3,


    },
    foodSection: {
     
 
        bottom: '2%'
    },
    drinkSection: {
       
    },



    nav: {
      
        
        backgroundColor:'blue',
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    menu: {
          top:'14%',

        maxHeight:'100%',
        backgroundColor: 'black',

    }



})





