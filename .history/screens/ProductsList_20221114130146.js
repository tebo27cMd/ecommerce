import React, { useEffect, useState } from 'react';
import { View, Text, FlatList, StyleSheet, ImageBackground } from 'react-native';
import Nav from '../components/nav'
import { Product } from '../components/Product.js';
import { getProducts } from '../services/ProductsService.js';
import bg from '../assets/products/bgi5.jpg'

export function ProductsList({ navigation }) {

  function renderProduct({ item: product }) {
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
      <View style={styles.storeItems}>
        <Nav />
      </View>
      <View style={styles.bannerBox}>
          <View style={{ alignSelf: 'center' ,,  backgroundColor:'#FFFEFF' }}>
          <Text style={styles.bannerText}>Choose From </Text>
          <Text style={{ alignSelf: 'center' }}> Our </Text>
          <Text style={{ alignSelf: 'center' , fontWeight:'bold'  }}>Wholesome Meals</Text>
          <Text style={{ alignSelf: 'center' }}>and</Text>
          <Text style={{ alignSelf: 'center', fontWeight:'bold'  }}>Refreshments</Text>

          </View>
         

        </View>
        <View style={{ height:'2%' }}></View>
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

  container: {

    flex: 1,
    // alignItems: 'center',

  },
  storeItems: {
    boxShadow: '#4B1603 5px 7px 8px -2px;',
    // paddingBottom: '2%',

    borderColor: 'black'

  },
  bannerBox: {
    // boxShadow: '#4B1603 9px 7px 7px -7px;',
    borderColor: 'orange',
    alignSelf:'center',
    width: "90%",
    top:'2%',
    borderBottomWidth: '2px',
    borderTopWidth: '2px',
    opacity: 0.7  ,
  
    backgroundColor:'#FFFEFF',
    boxShadow: '#4B1603 0px 7px 5px -2px;',
 

  },
  bannerText: {

    paddingTop: '20px',
    textAlign: 'center',
  },

});
