
import React, { useContext } from 'react';
import { View, Text, StyleSheet } from 'react-native';

import { CartContext } from '../CartContext';

export function CartIcon({navigation}) {
  const {getItemsCount} = useContext(CartContext);
  console.log(getItemsCount);
  return (
    <View style={styles.container}>
      <Text style={styles.text} 
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >Cart ({getItemsCount()})</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex:1,
    width:'50%',
   textAlign:'center',
    backgroundColor: '#f67c31',
    height: 20,
   
    borderRadius: 32 / 2,
    justifyContent: 'center',
top:'44%',

  },
  text: {
    color: 'white',

  },
});
