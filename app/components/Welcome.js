import { StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Welcome = ({text}) => {
  return (
    <View>
      <Text style={styles.Wel}>{text}</Text>
    </View>
  )
}

const styles = StyleSheet.create({
    Wel:{
        fontSize:35,
        textAlign:'center',
        margin:7,
        fontWeight:'bold',
        marginBottom:30,
        textTransform:'capitalize'
    
    }
})

export default Welcome;