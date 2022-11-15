import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet } from 'react-native';

import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';

export function ProductsList () {

  function renderProduct({item: product}) {
    return (
      <Product {...product} 
      onPress={() => {
        navigation.navigate('ProductDetails', {
          productId: product.id,
        });
      }}
      />
    );
  }
  
  const [products, setProducts] = useState([]);
  
  useEffect(() => {
    setProducts(getProducts());
  });
  
  return (
    <FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />
  );
}

const styles = StyleSheet.create({
  productsList: {
    backgroundColor: 'blue',
    // backgroundColor: '#eeeeee'
  },
  productsListContainer: {
    backgroundColor: '#EDEDED'
    // paddingVertical: 151,
    // marginHorizontal:151,
    
  },
});
