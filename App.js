import { NavigationContainer } from "@react-navigation/native"
import React, { useState } from 'react'

import 'react-native-gesture-handler';
import { AuthStack, RootStack } from "./app/routes/routes";

import { AuthenticationContext } from './app/context/AuthenticationContext';
import AppLoading from 'expo-app-loading';
import { getVariable } from './app/services/AsyncStorageMethods';

export default function App(){

  const [authReady , setAuthReady] = useState(false);
  const [storedCredentials, setStoredCredentials] = useState("")
  const [userType, setUserType] = useState("");
  const checkAuthenticationStatus = async () => {
      
    const userInfo = await getVariable("userInformation")
    setUserType("admin")

    if(userInfo !== null){
      setStoredCredentials(userInfo)
    }else{
      setStoredCredentials(null)
    }
    console.log(storedCredentials)
  }

  
  if(!authReady){
    return (
        <AppLoading 
            startAsync={checkAuthenticationStatus}
            onFinish={() => setAuthReady(true)}
            onError={(error) => console.log(error)}
        />
      )
  }

  return (
    <AuthenticationContext.Provider value={{ storedCredentials, setStoredCredentials }}>
      <NavigationContainer>
        {storedCredentials != null ? (
          <AuthStack />
        ) : (
          <RootStack userType={userType} />
        )}
      </NavigationContainer>
    </AuthenticationContext.Provider>
  )
}