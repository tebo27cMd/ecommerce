import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

export default function Homepage() {
  return (
    <View       style={styles.con}>
      <View       style={styles.productsList}>
      <Text>top</Text>
      </View>
      <View       style={styles.productsList}>
      <Text>mid</Text>
      </View>
      <View       style={styles.productsList}>
      <Text>low</Text>
      </View>
    
    </View>
  )
}

const styles = StyleSheet.create({})