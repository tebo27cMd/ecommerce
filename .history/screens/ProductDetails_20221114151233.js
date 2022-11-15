import React, { useEffect, useState, useContext } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  TouchableOpacity,
  StyleSheet,
  ImageBackground
} from 'react-native';
import bg from '../assets/products/bgi5.jpg'
import Nav from '../components/nav'
import { getProduct } from '../services/ProductsService.js';
import { CartContext } from '../CartContext';

export function ProductDetails({ route,navigation }) {
  const { productId } = route.params;
  const [product, setProduct] = useState({});

  const { addItemToCart } = useContext(CartContext);

  useEffect(() => {
    setProduct(getProduct(productId));
  });

  function onAddToCart() {
    addItemToCart(product.id);
  }

  return (
    <ImageBackground style={styles.container} source={bg} >
         <View style={styles.storeItems}>
          <Nav/>   
      </View>
      
      <ScrollView>
        <Image
          style={styles.image}
          source={product.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>R {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <TouchableOpacity style={styles.addButton}
            onPress={onAddToCart}
            title="Add to cart">
            <Text  style={{color:'white'}}>Add to Cart</Text>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  storeItems: {
    boxShadow: '#4B1603 5px 7px 8px -2px;',
    // paddingBottom: '2%',
    
    borderColor: 'black'

  },
  container: {
   
    flex: 1,
    // alignItems: 'center',

  },
  card: {
    backgroundColor: 'white',
    borderRadius: 16,
    shadowOpacity: 0.2,
    shadowRadius: 4,
    shadowColor: 'black',
    shadowOffset: {
      height: 0,
      width: 0,
    },
    elevation: 1,
    marginVertical: 20,
  },
  image: {
    height: 300,
    width: '100%'
  },
  infoContainer: {
    padding: 16,
    
  },
  name: {
    fontSize: 22,
    fontWeight: 'bold',
  },
  price: {
    fontSize: 16,
    fontWeight: '600',
    marginBottom: 8,
  },
  description: {
    fontSize: 16,
    fontWeight: '400',
    color: '#787878',
    marginBottom: 16,
  },
  addButton:{
backgroundColor:'orange',
width:'50%',
textAlign:'center',
 backgroundColor: '#f67c31',
 height: 20,
   alignSelf:'flex-end',
 borderRadius: 32 / 2,
 justifyContent: 'center',
  }
});
