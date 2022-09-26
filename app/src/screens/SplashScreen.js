import { Image, StyleSheet, Text, View } from 'react-native'
import React, { useEffect } from 'react'
import Img from '../../../assets/Splash.png'

const SplashScreen = ({navigation}) => {
    useEffect(() => {
        setTimeout(
            function() {
                navigation.navigate ("LoginScreen")
            },
            3000
          );
      });

  return (
    <View style={styles.container}>
    <Image source={Img} style={styles.image} />
    </View>
  )
}

export default SplashScreen

const styles = StyleSheet.create({
    container:{
        height: '100%',
        width: '100%',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        backgroundColor: 'white'
    },
    image: {
        width: 270,
        height: 200,
    }
})

