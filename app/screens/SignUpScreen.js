
import { ScrollView, StyleSheet, Text, View } from "react-native";
import React from "react";
import Logo from '../components/Logo';
import Input from "../components/Input";
import Welcome from "../components/Welcome";
import SignUp from "../components/SignUp";
import Account from "../components/Account";

const SignUpScreen = ({navigation}) => {
  return (
    <View style={styles.container}>
      <ScrollView>
         <Logo />
        <Welcome />
        <Input/>
        <View style={styles.buttonContainer}><SignUp/></View>  
        <Account navigation={navigation}/>
        
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container:{
    backgroundColor:"white",
    height:"100%"

  },
  buttonContainer:{

  
    alignItems:"center",
  }
});
