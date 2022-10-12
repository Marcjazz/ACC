import { createStackNavigator } from "@react-navigation/stack";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";

import AppRoutes from "./routeNames";

//auth screens import 
import LoginScreen from '../screens/auth/LoginScreen'
import SignUpScreen from '../screens/auth/SignUpScreen'
import AdminNav from "../screens/admin/AdminNav";


//common screens import
import BookScreen from "../screens/common/BookScreen"
import ChatScreen from "../screens/common/ChatScreen"
import VideoScreen from "../screens/common/VideoScreen"


//admin screens import
import AdminHomeScreen from "../screens/admin/AdminHomeScreen"
import UsersScreen from "../screens/admin/UsersScreen"
import UserScreen from "../screens/common/UserScreen";
import EditScreen from "../screens/common/EditScreen";


const Stack = createStackNavigator();
const Tab = createBottomTabNavigator();


function AuthStack() {
  return (
  <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}
  >
      <Stack.Screen name={AppRoutes.SignUpScreen} component={SignUpScreen} />

      <Stack.Screen name={AppRoutes.LoginScreen} component={LoginScreen} />
  </Stack.Navigator>
  );
}


function UserScreenStack() {
  return (
  <Stack.Navigator
      screenOptions={{ headerShown: false, gestureEnabled: true }}
  >
      <Stack.Screen name={AppRoutes.UserScreen} component={UserScreen} />
      <Stack.Screen name={AppRoutes.EditScreen} component={EditScreen} />
  </Stack.Navigator>
  );
}


function AdminStack() {
    return (
      <Tab.Navigator
        screenOptions={{ headerShown: true, gestureEnabled: false }}
        tabBar={(props) => <AdminNav {...props} />}
      >
        <Tab.Screen name={AppRoutes.AdminHomeScreen} component={AdminHomeScreen} />
        <Tab.Screen name={AppRoutes.BookScreen} component={BookScreen} />
        <Tab.Screen name={AppRoutes.ChatScreen} component={ChatScreen} />
        <Tab.Screen name={AppRoutes.VideoScreen} component={VideoScreen} />
        <Tab.Screen name={AppRoutes.UserScreenStack} component={UserScreenStack} />

      </Tab.Navigator>
    );
  }
  

  function UserStack() {
    return (
      <Tab.Navigator
        screenOptions={{ headerShown: false, gestureEnabled: false }}
        tabBar={(props) => <TeacherNavBar {...props} />}
      >
        <Tab.Screen name={AppRoutes.PostScreen} component={PostScreen} />
        <Tab.Screen name={AppRoutes.ProfileScreen} component={ProfileScreen} />
      </Tab.Navigator>
    );
  }

function RootStack({ userType }) {
    return (
        <Stack.Navigator
            screenOptions={{ headerShown: false, gestureEnabled: true }}
        >
  
            {userType == "admin" ? (
                <>
                  <Stack.Screen name={AppRoutes.AdminStack} component={AdminStack} />
                </>
            ) : (
                <>
                  <Stack.Screen name={AppRoutes.UserStack} component={UserStack} />
                </>
            )}
        </Stack.Navigator>
    )
}


export { RootStack, AuthStack };