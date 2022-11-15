
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
    width:'50%',
    marginHorizontal: 15,
    backgroundColor: 'orange',
    height: 20,
    padding: 12,
    borderRadius: 32 / 2,
    justifyContent: 'center',
top:'45%',
left:'20%'
  },
  text: {
    color: 'white',

  },
});
