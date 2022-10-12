import React from 'react';
import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Image,
} from 'react-native';
import Icons from '../../components/Icons';
import defaultStyle from '../../components/Styles'
import AppRoutes from '../../routes/routeNames'

const UserScreen = ({navigation}) => {

    return (
      <View style={styles.container}>
          <TouchableOpacity style={[defaultStyle.iconButton, styles.edit]}
            onPress={() => {
              navigation.push(AppRoutes.EditScreen)
            }}
          >
            <Image source={Icons.edit} style={defaultStyle.iconImage} />
          </TouchableOpacity>
          <View style={styles.header}>
            <View style={styles.headerContent}>
                <Image style={styles.avatar}
                  source={{uri: 'https://bootdey.com/img/Content/avatar/avatar6.png'}}/>

                <Text style={styles.name}>John Doe </Text>
                <Text style={styles.userInfo}>jhonnydoe@mail.com </Text>
                <Text style={styles.userInfo}>Florida </Text>
            </View>
          </View>

      </View>
    );
}

export default UserScreen;

const styles = StyleSheet.create({
  container: {
    height: '100%',
    backgroundColor: 'white',
    justifyContent: 'center', 
    alignItems: 'center'
  },
  headerContent:{
    padding:30,
    alignItems: 'center',
  },
  avatar: {
    width: 300,
    height: 300,
    borderRadius: 63,
    borderWidth: 4,
    borderColor: "white",
    marginBottom:10,
  },
  name:{
    fontSize: 30,
    color:"#000000",
    fontWeight:'600',
  },
  userInfo:{
    fontSize:16,
    color:"#778899",
    fontWeight:'600',
  },
  edit: {
    position: "absolute",
    zIndex: 10000,
    top: 10,
    right: 20
  },
});
