import { ScrollView, StyleSheet, Text, View, Alert } from 'react-native'
import React, { useState } from 'react'

import Logo from '../../components/Logo'
import Welcome from '../../components/Welcome'
import LoginInput from '../../components/LoginInput'
import Connecter from '../../components/Connecter'
import InputField from '../../components/InputField'
import { loginUser } from '../../api-backend/auth.service'

const LoginScreen = ({ navigation }) => {
  return (
    <View style={styles.container}>
      <ScrollView>
        <Logo />
        <Welcome text='bienvenu sur votre application' />
        <Form />
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text style={styles.Account}>
            j'ai pas de compte &nbsp;
            <Text
              style={[styles.acc.acc, styles.link]}
              onPress={() => navigation.push('SignUpScreen')}
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
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('')

  const login = (email, password) => {
    loginUser(email, password)
      .then(() => {
        //TODO navigate to login page
      })
      .catch((error) => {
        Alert.alert(error.message)
      })
  }

  return (
    <View>
      <InputField
        value={email}
        keyboardType='email-address'
        placeholder='Enter your email'
        onChangeText={setEmail}
        secret={false}
      />
      <InputField
        value={password}
        keyboardType='default'
        se
        placeholder='Enter your password'
        onChangeText={setPassword}
        secret={true}
      />
      <Connecter text='Se connecter' onClick={login()} />
    </View>
  )
}

export default LoginScreen

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    height: '100%',
    paddingTop: 100,
  },
  Account: {
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
    fontSize: 18,
  },
  acc: {
    fontWeight: 'bold',
  },
  link: {
    color: 'lightblue',
  },
})
