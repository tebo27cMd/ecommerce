import { StyleSheet, Text, View ,SafeAreaView,ScrollView} from 'react-native'
import React from 'react'

export default function Homepage() {
  return (
    <SafeAreaView>
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
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  container :{
flex:1,
backgroundColor:'blue'
  },
  topContainer
  :{
    flex:1
      },
      midContainer:{
        flex:8
      },
      lowContainer:{
        flex:1
      }
})