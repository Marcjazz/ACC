import { createStackNavigator } from '@react-navigation/stack';
import { NavigationContainer } from "@react-navigation/native";
import SplashScreen from "./app/src/screens/SplashScreen"
import SignUpScreen from './app/src/screens/SignUpScreen';
import LoginScreen from './app/src/screens/LoginScreen';
import DiscussionScreen from './app/src/screens/DiscussionScreen';
import TapNavigation from "./Navigation"
import 'react-native-gesture-handler';
import Drawer from './Drawer';
import GalerieScreen from './app/src/screens/GalerieScreen';


const Stack = createStackNavigator();

export default function App() {
  return (
    
    
    <NavigationContainer>

      <Stack.Navigator screenOptions={{headerShown: false}}>
      
            <Stack.Screen name="SplashScreen" component={SplashScreen} />
            <Stack.Screen name="SignUpScreen" component={SignUpScreen} />
            <Stack.Screen name="TapNavigation" component={TapNavigation} />
            <Stack.Screen name="LoginScreen" component={LoginScreen} />
            <Stack.Screen name="Drawer" component={Drawer} />
            <Stack.Screen name="DiscussionScreen" component={DiscussionScreen} />
            <Stack.Screen name="Galerie" component={GalerieScreen} />
            
      </Stack.Navigator>
    </NavigationContainer>

    
    

  );
}