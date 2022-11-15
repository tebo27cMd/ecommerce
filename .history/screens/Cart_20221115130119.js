import React, { useEffect, useState, useContext } from 'react';
import { View, Text, Button, FlatList, StyleSheet,ImageBackground } from 'react-native';
import Nav from '../components/nav';
import { CartContext } from '../CartContext';
import bg from '../assets/products/bgi5.jpg'
export default function Cart ({navigation}) {

  const {items, getItemsCount, getTotalPrice} = useContext(CartContext);
  
  function Totals() {
    let [total, setTotal] = useState(0);
    useEffect(() => {
      setTotal(getTotalPrice());
    });
    return (
       <View style={styles.cartLineTotal}>
          <Text style={[styles.lineLeft, styles.lineTotal]}>Total</Text>
          <Text style={styles.lineRight}>R {total}</Text>
       </View>
    );
  }

  function renderItem({item}) {
    return (
       <View style={styles.cartLine}>
          <Text style={styles.lineLeft}>{item.product.name} x {item.qty}</Text>
          <Text style={styles.lineRight}>R {item.totalPrice}</Text>
       </View>
    );
  }
  
  return (
    <ImageBackground style={styles.container} source={bg}  >
       <View style={styles.storeItems}>
          <Nav/>   
      </View>
       <FlatList
      style={styles.itemsList}
      contentContainerStyle={styles.itemsListContainer}
      data={items}
      renderItem={renderItem}
      keyExtractor={(item) => item.product.id.toString()}
      ListFooterComponent={Totals}
    />

    </ImageBackground>
   
  );
}

const styles = StyleSheet.create({
  container: {
   
    flex: 1,
    // alignItems: 'center',

  },
  cartLine: { 
    flexDirection: 'row',
  },
  cartLineTotal: { 
    flexDirection: 'row',
    borderTopColor: '#dddddd',
    borderTopWidth: 1
  },
  lineTotal: {
    fontWeight: 'bold',    
  },
  lineLeft: {
    fontSize: 20, 
    lineHeight: 40, 
    color:'#333333' 
  },
  lineRight: { 
    flex: 1,
    fontSize: 20, 
    fontWeight: 'bold',
    lineHeight: 40, 
    color:'#333333', 
    textAlign:'right',
  },
  itemsList: {
  
  },
  itemsListContainer: {
    opacity:
    backgroundColor: 'white',
    paddingVertical: 8,
    marginHorizontal: 8,
  },
  storeItems: {
    boxShadow: '#4B1603 5px 7px 8px -2px;',
    // paddingBottom: '2%',
    
    borderColor: 'black'

  },
});
