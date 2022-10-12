import { ScrollView, StyleSheet, Text, View, Alert } from "react-native";
import React, {useState} from 'react';
import Logo from "../../components/Logo";
import Welcome from "../../components/Welcome";
import InputField from "../../components/InputField";
import Connecter from "../../components/Connecter";

const SignUpScreen = ({navigation}) => {
  return (
    <View style={{ backgroundColor: "white", paddingTop: 100 }}>
        
        <Welcome text="bienvenu sur votre application" />
        <ScrollView>
          <Form />
          <View style={{display:'flex', justifyContent: 'center', alignItems: 'center'}}>
            <Text style={styles.Account}>
              j'ai pas de compte &nbsp;
              <Text
                style={[styles.acc.acc, styles.link]}
                onPress={() => navigation.push("LoginScreen")}
              >
                Cree un compte
              </Text>
            </Text>
          </View>
        </ScrollView>
    </View>
  )
}

const Form = () => {
  const [email, setEmail] = useState("")
  const [contact, setContact] = useState("")
  const [password, setPassword] = useState("")
  const [cPassword, setCPassword] = useState("")

  const register = () => {
    Alert.alert("hello")
  }

  return (
    <View>
      <InputField  value={email} keyboardType="email-address" placeholder="Enter your email" onChangeText={setEmail} secret={false} />
      <InputField  value={contact} keyboardType="default" placeholder="Enter your contact" onChangeText={setContact} secret={false} />
      <InputField  value={password} keyboardType="default" placeholder="Enter your password" onChangeText={setPassword} secret={true} />
      <InputField  value={cPassword} keyboardType="default" placeholder="Confirm password" onChangeText={setCPassword} secret={true} />
      <Connecter text="Cree Compte" onClick={register()} />
    </View>
  )
}

const styles = StyleSheet.create({
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

export default SignUpScreen