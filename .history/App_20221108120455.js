import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import  Cart  from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';
import Homepage from './screens/Homepage.js';

const Stack = createNativeStackNavigator();

function App() {
  return (
   <CartProvider></CartProvider>
     
  
  );
}

const styles = StyleSheet.create({
  
  headerTitle: {
    fontSize: 20
  }
});

export default App;
