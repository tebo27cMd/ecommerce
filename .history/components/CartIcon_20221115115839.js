
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Icon } from 'react-native-elements';
import { CartContext } from '../CartContext';

export function CartIcon({ navigation }) {
  const { getItemsCount } = useContext(CartContext);
  console.log(getItemsCount);
  return (
    <View style={styles.container}>
      <View style={styles.text}
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >    <Icon
      style={{paddingTop:'1%'}}
      name='shopping-cart'
      type='ionicons'
      color='white'
      size={x}
      
    /> ({getItemsCount()})</View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    width: '10%',
    textAlign: 'center',
    backgroundColor: '#f67c31',
    left: '88%',
    bottom: '10%',
    borderRadius: 36 / 2,
    justifyContent: 'center',


  },
  text: {
    color: 'white',

  },
});
