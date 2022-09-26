import { StyleSheet, Text, View,Button,ScrollView } from 'react-native'
import React from 'react'

const ChatScreen = () => {
  return (
    <View style={styles.container}>
      <Text>ChatScreen</Text>
      <Button title="click here" onpress={()=>{}}/>
    </View>
  );
};

export default ChatScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center',

    },
});