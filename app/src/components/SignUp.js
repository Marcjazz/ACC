import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const SignUp = ({navigation}) => {
  return (
    <TouchableOpacity style={styles.container} onPress={()=>navigation.push("LoginScreen")}> 
    <Text style={styles.SignUp}>cree un compte</Text>
    </TouchableOpacity>
    
  )
}



const styles = StyleSheet.create({
    container:{
        alignItems:"center",
        justifyContent: "center",
        marginTop:8,
        width:"65%",
        borderRadius:30,
        backgroundColor:"#17baed",
        marginLeft:"2%"
        
    },
    SignUp:{
      padding:15,
      fontSize: 20,
      borderColor:"black",
      marginBottom:6,
      textAlign: "center",
      width:"60%",
      
    }
})

export default SignUp