import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Temoignages = () => {
  return (
    <View style={styles.container}>
      <Text>Temoignages</Text>
    </View>
  )
}

export default Temoignages

const styles = StyleSheet.create({
    container: {
    flex: 1,
    flexDirection: "column",
    backgroundColor: 'yellow',
    justifyContent: "center",
    alignItems: "center",

}, 
 } );