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
        <SafeAreaView style={{ backgroundColor: 'black' }}>
            <View style={styles.cont} onPress={() => Keyboard.dismiss()}>

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
            <View></View>
            <ScrollView style={styles.displayMenu}>

            </ScrollView>
            <View></View>



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
    cont: {
        flex: 1,
        backgroundColor:'red',
    },
    displayMenu:{
        flex:1
        backgroundColor:'blue'
    }
})