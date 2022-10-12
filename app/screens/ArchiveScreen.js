import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const ArchiveScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ArchiveScreen</Text>
    </View>
  )
}

export default ArchiveScreen

const styles = StyleSheet.create({
    container: {
      flex: 1,
      height: '100%',
      flexDirection: "column",
      justifyContent: "center",
      alignItems: "center",
    },
  });
  