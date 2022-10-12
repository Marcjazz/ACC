import { StyleSheet, TouchableOpacity, View, Image } from "react-native";
import AppRoutes from "../../routes/routeNames";
import Icons from "../../components/Icons";


function AdminNav({ state, descriptors, navigation }) {
  return (
    <View style={styles.container}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const label =
          options.tabBarLabel !== undefined
            ? options.tabBarLabel
            : options.title !== undefined
            ? options.title
            : route.name;

        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const ImageIcon = (route) => {
          switch (route.name) {
            case AppRoutes.AdminHomeScreen:
              return !isFocused ? <Image style={styles.image} source={Icons.home} /> : <Image style={styles.image} source={Icons.homeActive} />;
            case AppRoutes.BookScreen:
              return !isFocused ? <Image style={styles.image} source={Icons.book} /> : <Image style={styles.image} source={Icons.bookActive} />;
            case AppRoutes.ChatScreen:
              return !isFocused ? <Image style={styles.image} source={Icons.message} /> : <Image style={styles.image} source={Icons.messageActive} />;
            case AppRoutes.VideoScreen:
              return !isFocused ? <Image style={styles.image} source={Icons.video} /> : <Image style={styles.image} source={Icons.videoActive} />;
            case AppRoutes.UserScreenStack:
              return !isFocused ? <Image style={styles.image} source={Icons.user} /> : <Image style={styles.image} source={Icons.userActive} />;
            default:
              break;
          }
        };

        return (
          <TouchableOpacity
            key={`navbaricon-${index}`}
            accessibilityRole="button"
            accessibilityStates={isFocused ? ["selected"] : []}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={{ flex: 1, alignItems: "center" }}
          >
            {ImageIcon(route)}
          </TouchableOpacity>
        );
      })}
    </View>
  );
}

export default AdminNav;

const styles = StyleSheet.create({
  container: {
    display:'flex',
    flexDirection:'row',
    backgroundColor: "lightblue",
    height: 65,
    borderTopStartRadius: 18,
    borderTopEndRadius: 18,
    alignItems: "center",
    justifyContent: 'space-between',
  },
  image: {
    width: 30,
    height: 30,
  }
});
