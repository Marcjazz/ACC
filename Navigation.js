import { StyleSheet, Text, View, TouchableOpacity } from "react-native";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { Ionicons } from "@expo/vector-icons";
import { NavigationContainer } from "@react-navigation/native";
import ParametreScreen from "./app/src/screens/ParametreScreen";
import AcceuilScreen from "./app/src/screens/AcceuilScreen";
import ArchiveScreen from "./app/src/screens/ArchiveScreen";
import GalerieScreen from "./app/src/screens/GalerieScreen";
import Temoignages from "./app/src/screens/Temoignages";
import LoginScreen from "./app/src/screens/LoginScreen";
import * as SplashScreen from 'expo-splash-screen';
import DiscussionScreen from "./app/src/screens/DiscussionScreen";

 

const tab = createBottomTabNavigator();

export default function TabNavigation() {
  return (
      <tab.Navigator
        screenOptions={({ route }) => ({
          tabBarIcon: ({ focused, color, size }) => {


            let iconName;

            if (route.name == "Accueil") {
              iconName = "home";
            } else if (route.name == "Parametre") {
              iconName = "settings";
            } else if (route.name == "Galerie") {
              iconName = "images";
            } else if (route.name == "Archives") {
              iconName = "archive";
            } else if (route.name == "Temoignages") {
              iconName = "people-circle-outline";

            } else if (route.name == "DiscussionScreen") {
              iconName = "chatbox-ellipses";
              
            }
            return <Ionicons name={iconName} size={24} color="black " />;
          },
          headerShown:false
        })}
      >
    
        <tab.Screen name="Accueil" component={AcceuilScreen} />
        <tab.Screen name="Temoignages" component={Temoignages} />
        <tab.Screen name="DiscussionScreen" component={DiscussionScreen} />
        <tab.Screen name="Archives" component={ArchiveScreen} />
        <tab.Screen name="Galerie" component={GalerieScreen} />
        <tab.Screen name="Parametre" component={ParametreScreen} />
        
        
      </tab.Navigator>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center",
    // backgroundColor:"black"
  },
});
  