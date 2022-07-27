import "react-native-gesture-handler";
import { StatusBar } from "expo-status-bar";
import { StyleSheet } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import CatergoriesScreens from "./screens/CategoriesScreens";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import { createDrawerNavigator } from "@react-navigation/drawer";
import MealsOverViewScreen from "./screens/MealsOverViewScreen";
import MealDetailsScreen from "./screens/MealsDetailsScreen";
import FavoriteScreens from "./screens/FavoriteScreens";
// import FavoritesContextProvider from "./store/context/favorites.context";
import { Provider } from "react-redux";
import { store } from "./store/redux/store";

const Stack = createNativeStackNavigator();
const Drawer = createDrawerNavigator();

function DrawerNavigator() {
  return (
    <Drawer.Navigator
      screenOptions={{
        headerStyle: { backgroundColor: "#0d1b2a" },
        headerTintColor: "white",
        sceneContainerStyle: { backgroundColor: "#415a77" },
        drawerContentStyle: { backgroundColor: "#0d1b2a" },
        drawerActiveTintColor: "#0d1b2a",
        drawerActiveBackgroundColor: "#cac4ce",
        drawerInactiveTintColor: "white",
      }}
    >
      <Drawer.Screen
        name="Categories"
        component={CatergoriesScreens}
        options={{
          title: "All Categories",
          drawerIcon: ({ size, color }) => {
            return <Ionicons name="list" size={size} color={color} />;
          },
        }}
      />
      <Drawer.Screen
        name="Favorites"
        component={FavoriteScreens}
        options={{
          title: "Favorites",
          drawerIcon: ({ size, color }) => {
            return <Ionicons name="star" size={size} color={color} />;
          },
        }}
      />
    </Drawer.Navigator>
  );
}

export default function App() {
  return (
    <>
      <StatusBar style="light" />
      <Provider store={store}>
        {/* <FavoritesContextProvider> */}
        <NavigationContainer>
          <Stack.Navigator
            screenOptions={{
              headerTitleAlign: "center",
              headerTintColor: "white",
              headerStyle: { backgroundColor: "#0d1b2a" },
              contentStyle: {
                backgroundColor: "#415a77",
              },
            }}
          >
            {/* <Stack.Navigator initialRouteName="MealsOverView"> => which sets default initial page as mealsoverview  */}
            <Stack.Screen
              // name="MealsCategory"
              name="Drawer"
              // component={CatergoriesScreens}
              component={DrawerNavigator}
              options={{
                // title: "All Categories",
                headerShown: false,
              }}
            />
            <Stack.Screen
              name="MealsOverView"
              component={MealsOverViewScreen}
              // other way to give title
              // options={({ route, navigation }) => {
              //   const categoryId = route.params.categoryId;
              //   return { title: categoryId };
              // }}
              options={{
                title: "Meals Overview",
              }}
            />
            <Stack.Screen
              name="MealsDetails"
              component={MealDetailsScreen}
              options={{
                title: "Meals Details",
              }}
            />
          </Stack.Navigator>
          {/* <CatergoriesScreens /> */}
        </NavigationContainer>
        {/* </FavoritesContextProvider> */}
      </Provider>
    </>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    // backgroundColor: "#fff",
    alignItems: "center",
    justifyContent: "center",
  },
});
