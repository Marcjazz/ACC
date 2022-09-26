import { ScrollView, StyleSheet, Text, View, Pressable } from "react-native";
import React from "react";

import Logo from "../components/Logo";
import Welcome from "../components/Welcome";
import LoginInput from "../components/LoginInput";
import Connecter from "../components/Connecter";

const SignUpScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Logo />
        <Welcome />
        <LoginInput />
        <Connecter navigation={navigation} />
        <View style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
          <Text style={styles.Account}>
            j'ai pas de compte &nbsp;
            <Text
              style={[styles.acc.acc, styles.link]}
              onPress={() => navigation.push("SignUpScreen")}
            >
              Cree un compte
            </Text>
          </Text>
        </View>
      </ScrollView>
    </View>
  );
};

export default SignUpScreen;

const styles = StyleSheet.create({
  container: {
    backgroundColor: "white",
    height: "100%",
    paddingTop:100

  },
  Account: {
    justifyContent:"center",
    alignItems: "center",
    marginTop: 20,
    fontSize: 18,
  },
  acc: {
    fontWeight: "bold",
  },
  link: {
    color: "lightblue",
  },
});
