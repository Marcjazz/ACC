  import { StyleSheet, Image, View } from 'react-native'
  import React from 'react'
  
  const LogoImage= require('../../../assets/Splash.png')
  
  export default function Logo(){
    return(
        <View style={styles.img}>
            <Image
             source={LogoImage}
             style={{width:200,height:200}}   
            />
        </View>
    )
  }
  

  
  const styles = StyleSheet.create({
    img :{
        paddinTop:60,
        justifyContent: 'center',
        alignItems: 'center',
        height: "30%",
         }
  })
  