import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const GalerieScreen = () => {
  return (
    <View style={styles.container}>
      <Text>GalerieScreen</Text>
    </View>
  )
}

export default GalerieScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  