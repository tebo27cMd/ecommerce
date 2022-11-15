import React from 'react';
import { StyleSheet } from 'react-native';
import { NavigationContainer } from '@react-navigation/native';
import { createNativeStackNavigator } from '@react-navigation/native-stack';

import { ProductsList } from './screens/ProductsList.js';
import { ProductDetails } from './screens/ProductDetails.js';
import { Cart } from './screens/Cart.js';
import { CartIcon } from './components/CartIcon.js';
import { CartProvider } from './CartContext.js';
i

const Stack = createNativeStackNavigator();

function App() {
  return (
   
      <NavigationContainer>
        <Stack.Navigator>
        <Stack.Screen name='Home' component={Home} 
          options={({ navigation }) => ({
            headerShown:false
            // title: 'Homepage',
            // headerTitleStyle: styles.headerTitle,
            // headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          {/* <Stack.Screen name='Products' component={ProductsList} 
          options={({ navigation }) => ({
            title: 'Products',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>
          })}/>
          <Stack.Screen name='ProductDetails' component={ProductDetails} 
          options={({ navigation }) => ({
            title: 'Product details',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} /> */}
          {/* <Stack.Screen name='Cart' component={Cart} 
          options={({ navigation }) => ({
            title: 'My cart',
            headerTitleStyle: styles.headerTitle,
            headerRight: () => <CartIcon navigation={navigation}/>,
          })} /> */}
        </Stack.Navigator>
      </NavigationContainer>
  
  );
}

const styles = StyleSheet.create({
  
  headerTitle: {
    fontSize: 20
  }
});

export default App;
