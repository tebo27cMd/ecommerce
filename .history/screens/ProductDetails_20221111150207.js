import React, { useEffect, useState, useContext } from 'react';
import {
  Text,
  Image,
  View,
  ScrollView,
  SafeAreaView,
  Button,
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
                <Nav/>  
      <ScrollView>
        <Image
          style={styles.image}
          source={product.image}
        />
        <View style={styles.infoContainer}>
          <Text style={styles.name}>{product.name}</Text>
          <Text style={styles.price}>R {product.price}</Text>
          <Text style={styles.description}>{product.description}</Text>
          <Button
            onPress={onAddToCart}
            title="Add to cart"
          />
        </View>
      </ScrollView>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
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
});
