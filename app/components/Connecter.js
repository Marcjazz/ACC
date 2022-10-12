import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import React from 'react'

const connecter = ({onClick, text}) => {
    return (
      <TouchableOpacity style={styles.container} onPress={()=>{onClick}}>
        <Text style={styles.SignUp}>{text}</Text>
      </TouchableOpacity>
      
    )
  }
  
  
  
  const styles = StyleSheet.create({
      container:{
          alignItems:"center",
          justifyContent: "center",
          marginTop:10,
          width:"60%",
          marginLeft:"17%",
          backgroundColor:"#17baed",
          borderRadius: 30,
          elevation:12,
      },
      SignUp:{
        padding:15,
        fontSize: 20,
        borderColor:"black",
        marginBottom:8,
        textAlign: "center",
        width:"65%",
        color:"white"
      }
  })
  

export default connecter