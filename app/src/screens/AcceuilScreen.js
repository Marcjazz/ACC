import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
  ImageBackground
} from "react-native";
import React, { useRef, useState } from "react";
import profile from "../../../assets/logo.png";
import Home from "../../../assets/Home.png";
import Recherche from "../../../assets/Recherches.png";
import Notification from "../../../assets/Notifications.png";
import Reglages from "../../../assets/Reglages.png";
import LogOut from "../../../assets/LogOut.png";
import menu from "../../../assets/menu.png";
import close from "../../../assets/close.png";
import photo from "../../../assets/photo.png";
import { Feather } from '@expo/vector-icons';
import { Ionicons } from '@expo/vector-icons';
import { AntDesign } from '@expo/vector-icons';
import bg from '../../../assets/bg2.jpg'
import bg1 from '../../../assets/bg1.jpg'
import bg2 from '../../../assets/bg3.jpg'
import bg3 from '../../../assets/bg8.jpg'
import bg4 from '../../../assets/bg4.jpg'
import bg5 from '../../../assets/bg5.jpg'
import bg6 from '../../../assets/bg6.jpg'
import bg7 from '../../../assets/bg7.jpg'

export default function AcceuilScreen() {
  const [currentTab, setcurrentTab] = useState("Accueil");

  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
    
      <View style={{ justifyContent: "flex-start", padding: 15, backgroundColor: 'gray' }}>
        <Image
          source={profile}
          style={{
            width: 60,
            height: 60,
            borderRadius: 10,
            marginTop: 8,
          }}
        ></Image>
        <Text
          style={{
            fontSize: 20,
            fontWeight: "bold",
            color: "black",
            marginTop: 20,
          }}
        >
          fred{" "}
        </Text>

        <TouchableOpacity>
          <Text
            style={{
              marginTop: 6,
              color: "black",
            }}
          >
            view profile{" "}
          </Text>
        </TouchableOpacity>

        <View style={{ flexGrow: 1, marginTop: 50 }}>
          {}

          {TabButton(currentTab, setcurrentTab, "Home", Home)}
          {TabButton(currentTab, setcurrentTab, "Recherches", Recherche)}
          {TabButton(currentTab, setcurrentTab, "Notifications", Notification)}
          {TabButton(currentTab, setcurrentTab, "Reglages", Reglages)}
        </View>
        {TabButton(currentTab, setcurrentTab, "Deconnexion", LogOut)}
      </View>

      {
        ///
      }
      <Animated.View
        style={{
          flexGrow: 1,
          backgroundColor: "white",
          position: "absolute",
          bottom: 0,
          top: 0,
          left: 0,
          right: 0,
          paddingHorizontal: 15,
          paddingVertical: 20,
          borderRadius: showMenu ? 15 : 0,
          transform: [{ scale: scaleValue }, { translateX: offsetValue }],
        }}
      >
        {}

        <Animated.View style={{
          transform: [{
            translateY: closeButtonOffset
          }]
        }}>
          <TouchableOpacity
            onPress={() => {
              Animated.timing(scaleValue, {
                toValue: showMenu ? 1 : 0.88,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(offsetValue, {
                toValue: showMenu ? 0 : 220,
                duration: 300,
                useNativeDriver: true,
              }).start();

              Animated.timing(closeButtonOffset, {
                toValue: !showMenu ? -30 : 0,
                duration: 300,
                useNativeDriver: true,
              }).start();

              setShowMenu(!showMenu);
            }}
          >
            {
              showMenu ? <AntDesign name="closesquareo" size={30} color="black" /> : <Feather name="menu" size={34} color="black" style={styles.icons}/>
            }
          </TouchableOpacity>

          <ImageBackground source={bg} style={{backgroundColor:'gray',width: '100%',height: '100%',display:'flex',flexDirection:'row',alignItems:'center',alignContent:'center',
          justifyContent:'space-evenly',flexWrap:'wrap',paddingBottom:'18%'}}>
            <TouchableOpacity style={styles.card}>
                <Image source={bg3} style={styles.bgImage}/>
                <Text style={{height:45,textAlign:'center',fontSize:18,paddingTop:'7%'}}>prieres</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <Image source={bg1} style={styles.bgImage}/>
                <Text style={{height:45,textAlign:'center',fontSize:18,paddingTop:'7%'}}>Meditations</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <Image source={bg2} style={styles.bgImage}/>
                <Text style={{height:45,textAlign:'center',fontSize:18,paddingTop:'7%'}}>Agenda</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <Image source={bg3} style={styles.bgImage}/>
                <Text style={{height:45,textAlign:'center',fontSize:18,paddingTop:'7%'}}>Membres de l'eglise</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <Image source={bg4} style={styles.bgImage}/>
                <Text style={{height:45,textAlign:'center',fontSize:18,paddingTop:'7%'}}>Faire un don</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <Image source={bg5} style={styles.bgImage}/>
                <Text style={{height:45,textAlign:'center',fontSize:18,paddingTop:'7%'}}>Annonces de l'eglise </Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <Image source={bg6} style={styles.bgImage}/>
                <Text style={{height:45,textAlign:'center',fontSize:18,paddingTop:'7%'}}>visioconference</Text>
              </TouchableOpacity>

              <TouchableOpacity style={styles.card}>
                <Image source={bg7} style={styles.bgImage}/>
                <Text style={{height:45,textAlign:'center',fontSize:18,paddingTop:'7%'}}>cantiques</Text>
              </TouchableOpacity>
          </ImageBackground>
         
        </Animated.View>
      </Animated.View>
    </SafeAreaView>
  );
}

const TabButton = (currentTab, setcurrentTab, title, image) => {
  return (
    <TouchableOpacity
      onPress={() => {
        if (title == "LogOut") {
        } else {
          setcurrentTab(title);
        }
      }}
    >
      <View
        style={{
          flexDirection: "row",
          alignItems: "center",
          paddingVertical: 8,
          paddingLeft: 13,
          backgroundColor: currentTab == title ? "lightblue" : "transparent",
          paddingRight: 35,
          borderRadius: 8,
          marginTop: 10,
        }}
      >
        <Image
          source={image}
          style={{
            width: 25,
            height: 25,
            borderRadius: 15,
            marginTop: 20,
          }}
        ></Image>
        <Text
          style={{
            fontSize: 15,
            fontWeight: "bold",
            paddingLeft: 15,
            paddingTop: 15,
          }}
        >
          {title}
        </Text>
      </View>
    </TouchableOpacity>
  );
};
const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
  card:{
    width: '39%',
    height: 150,
    shadowColor: "#000",
    elevation: 8,
    backgroundColor:'white',
    marginVertical:'3%'
  },
  bgImage:{
    flex: 1,
    width: 150,
    height: 185,
    resizeMode:'cover',
  },
  icons:{
    width: 50,
    height: 30,
    marginTop: 20,
  }
});
