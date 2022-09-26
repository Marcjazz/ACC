import { StyleSheet, Text, View ,Button} from 'react-native'
import React from 'react'

const MessageScreen = ({Navigation}) => {
  return (
    <View style={styles.container}>
      <Text>MessageScreen</Text>
      <Button
        title ="click here"
        onPress={()=>Navigation.Navigation('chat')}
      />
    </View>
  )
}

export default MessageScreen

const styles = StyleSheet.create({
    container:{
        flex:1,
        alignItems:'center',
        justifyContent:'center'
    },
});