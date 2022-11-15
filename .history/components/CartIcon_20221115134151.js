
import React, { useContext } from 'react';
import { View, Text, StyleSheet ,TouchableOpacity} from 'react-native';
import { Icon } from 'react-native-elements';
import { CartContext } from '../CartContext';

export function CartIcon({ navigation }) {
  const { getItemsCount } = useContext(CartContext);
  console.log(getItemsCount);
  return (
    <View style={styles.container}>
      <TouchableOpacity style={styles.text}
        onPress={() => {
          navigation.navigate('Cart');
        }}
      >   <Icon
      style={{ alignSelf: 'center', marginHorizontal: 5, paddingTop: '3%' }}
      name='shopping-cart'
      type='ionicons'
      color='white'
      size='xs'
      
    />({getItemsCount()})</TouchableOpacity>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {

    width: '10%',
    textAlign: 'center',
    backgroundColor: '#f',
    left: '88%',
    bottom: '10%',
    borderRadius: 32 / 2,
    justifyContent: 'center',


  },
  text: {
    color: 'white',

  },
});
