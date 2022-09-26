import {
  StyleSheet,
  Text,
  View,
  SafeAreaView,
  Image,
  TouchableOpacity,
  Animated,
} from "react-native";
import React, { useRef, useState } from "react";
import profile from "./assets/logo.png";
import Home from "./assets/Home.png";
import Recherche from "./assets/Recherches.png";
import Notification from "./assets/Notifications.png";
import Reglages from "./assets/Reglages.png";
import LogOut from "./assets/LogOut.png";
import menu from "./assets/menu.png";
import close from "./assets/close.png";
import photo from "./assets/photo.png";

export default function Drawer() {
  const [currentTab, setcurrentTab] = useState("Accueil");

  const [showMenu, setShowMenu] = useState(false);

  const offsetValue = useRef(new Animated.Value(0)).current;
  const scaleValue = useRef(new Animated.Value(1)).current;
  const closeButtonOffset = useRef(new Animated.Value(0)).current;

  return (
    <SafeAreaView style={styles.container}>
      <View style={{ justifyContent: "flex-start", padding: 15, backgroundColor: 'lightblue' }}>
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
            view profile{""}
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
            <Image
              source={ showMenu ? close : menu}
              style={{
                width: 50,
                height: 50,
                marginTop: 40,
              }}
            ></Image>
          </TouchableOpacity>
          
          <Text
            style={{
              fontSize: 30,
              fontWeight: "bold",
              paddingTop: 20,
              Colors: "black",
            }}
          >
            {" "}
            {currentTab}
          </Text>
          
          {/* <Image
            source={photo}
            style={{
              width: "100%",
              height: 300,
              borderRadius: 15,
              marginTop: 20,
            }}
          ></Image> */}

          <Text
            style={{
              fontSize: 20,
              fontWeight: "bold",
              paddingTop: 15,
              paddingBottom: 8,
            }}
          >
            
          </Text>
          <Text
            style={{
              fontSize: 20,
            }}
          >
          </Text>
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
    backgroundColor: "blue",
    alignItems: "flex-start",
    justifyContent: "flex-start",
  },
});
