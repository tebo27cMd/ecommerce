import React, {useEffect, useState} from 'react';
import { View, Text, FlatList, StyleSheet ,ImageBackground} from 'react-native';
import Nav from '../components/nav'
import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';
import bg from '../assets/products/bgi5.jpg'

export function ProductsList ({navigation}) {

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
<ImageBackground style={styles.container} source={bg} >
<FlatList
      style={styles.productsList}
      contentContainerStyle={styles.productsListContainer}
      keyExtractor={(item) => item.id.toString()}
      data={products}
      renderItem={renderProduct}
    />

</ImageBackground>
  
  );
}

const styles = StyleSheet.create({
  productsList: {
 
    backgroundColor: '#eeeeee'
  },
  productsListContainer: {
    backgroundColor: '#EDEDED'
    // paddingVertical: 151,
    // marginHorizontal:151,
    
  },
  container: {
   
    flex: 1,
    // alignItems: 'center',

  },
});
