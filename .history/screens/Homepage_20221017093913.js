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

export default function Homepage(){
    return(
        <SafeAreaView style={styles.mainContainer}>
            <View  style={styles.container}>
            <Icon
                    style={styles.inputIcon}
                    size="xxs"
                    name='bars'
                    type='ionicons'
                    color='#FA4A0C'
                />
                {/* <Icon
                    style={styles.cartIcon}
                    size="xxs"
                    name='shopping-cart'
                    type='ionicons'
                    color='#FA4A0C'
                /> */}
                <Animatable.Text
                    style={styles.titleText}
                    animation='fadeInUp'
                    delay={1200}
                ><Text>
                        <Text style={styles.header1}>Delicious</Text>
                        {"\n"}
                        <Text style={styles.header2} >  <View
                            style={{
                                borderBottomColor: 'blue',
                            }}
                        /> food for you</Text>

                    </Text>
                </Animatable.Text>
                <View style={styles.searchView}>
                    <TextInput style={styles.searchBar}
                        placeholder={'search...'}>

                    </TextInput>

                </View>

            </View>
            <ScrollView style={styles.menuSection} >
                <TouchableOpacity style={styles.foodSection}>
                <Image style={{ width: 66, height: 66, borderRadius: '50px' }}
                        source={pic1} />

                </TouchableOpacity>
                <TouchableOpacity style={styles.drinks}>

                </TouchableOpacity>

            </ScrollView>
            <View style={styles.nav}>
                <View style={styles.homeIcon}>
                    <Icon
                        style={styles.inputIcon}
                        size="large"
                        name='home'
                        type='ionicons'
                        color='#FA4A0C'
                    />

                </View>
                <View style={styles.profileIcon}>
                    <Icon
                        style={styles.inputIcon}
                        size="large"
                        name='user'
                        type='ionicons'
                        color='#FA4A0C'
                    />

                </View>
                <View style={styles.historyIcon}>
                    <Icon
                        style={styles.inputIcon}
                        size="large"
                        name='history'
                        type='ionicons'
                        color='#FA4A0C'
                    />

                </View>

            </View>
        </SafeAreaView>
        )
}

const styles = StyleSheet.create({
    mainContainer: {
        flex: 1,
        backgroundColor: '#EDEDED'
    },
    container: {
        flex: 10,
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
        shadowOffset: {width: -2, height: 4},
        shadowOpacity: 0.2,
        shadowRadius: 3,


    },
    foodSection:{
        maxHeight: '100%',
     backgroundColor:'pink'
    },



    nav: {
        flex: 1,
        flexDirection: 'row',
        justifyContent: 'space-evenly'
    },
    menuSection:{
        top:'10%',
    
        flex:12,
        backgroundColor:'black',
        flexDirection:'column'
    }



})





