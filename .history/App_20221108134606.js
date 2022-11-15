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
import { ProductDetailsDrinks } from './screens/ProductDetailsDrinks.js';
const Stack = createNativeStackNavigator();

function App() {
  return (
   <CartProvider>
     <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Homepage' component={Homepage} 
          options={({ navigation }) => ({
   
            title: 'Homepage',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
        <Stack.Screen name='Homepage' component={Homepage} 
          options={({ navigation }) => ({
   
            title: 'Homepage',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
             <Stack.Screen name='ProductsDrinks' component={ProductDetailsDrinks} 
          options={({ navigation }) => ({
            title: 'ProductsDrinks',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
          <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} />
        </Stack.Navigator>
      </NavigationContainer>
   </CartProvider>
     
  
  );
}

const styles = StyleSheet.create({
  
  headerTitle: {
    fontSize: 20
  }
});

export default App;
