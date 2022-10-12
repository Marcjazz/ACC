import { Linking, StyleSheet, Text, View } from 'react-native'
import React from 'react'

const Account = ({navigation}) => {
  return (
    <View style={styles.Account}>
      <Text style={styles.Account}>
      j'ai un compte &nbsp;
      <Text
      style={[styles.acc.acc,styles.link]}
      onPress={()=>navigation.push("LoginScreen")}
      >
      Connecter
      </Text>
      </Text>
    </View>
  );
}

export default Account

const styles = StyleSheet.create({
    Account:{
        alignItems:"center",
        marginTop:20,
        fontSize:18,
    },
    acc:{
        fontWeight:"bold",
    },
    link:{
        color:"lightblue",
    },
      
})