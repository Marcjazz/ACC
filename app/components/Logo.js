  import { StyleSheet, Image, View } from 'react-native'
  import React from 'react'
  import Images from './Images'
  
  export default function Logo(){
    return(
        <View style={styles.img}>
            <Image
             source={Images.Logo}
             style={{width:200,height:200}}   
            />
        </View>
    )
  }
  

  
  const styles = StyleSheet.create({
    img :{
        justifyContent: 'center',
        alignItems: 'center',
        height: "30%",
         }
  })
  