import React, { useEffect, useState, useContext } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
  StyleSheet
} from 'react-native';

import { getProduct } from '../services/ProductsService.js';
import { CartContext } from '../CartContext';
import Icon from 'react-native-vector-icons/FontAwesome';
export default function Homepage(){
    return(
        <SafeAreaView>
            <View>
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
            <ScrollView>

            </ScrollView>
            <View>

            </View>
        </SafeAreaView>
        )
}

