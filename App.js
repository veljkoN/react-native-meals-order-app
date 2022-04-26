import { View, Platform } from "react-native";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import CategoriesScreen from "./components/CategoriesScreen";
import CategoryMealsScreen from "./screens/CategoryMealsScreen";
import MealDetailScreen from "./screens/MealDetailScreen";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import Colors from "./constants/Colors";
import { Ionicons } from "@expo/vector-icons";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";
import { createDrawerNavigator } from "@react-navigation/drawer";
import "react-native-gesture-handler";
import FavoritesScreen from "./screens/FavoriteScreens";
import FilterScreen from "./screens/FiltersScreen";
import { createStore, combineReducers } from "redux";
import { Provider } from "react-redux";
import mealsReducers from "./store/reducers/meal";
import { useFonts, Inter_700Bold } from "@expo-google-fonts/inter";
import AppLoading from "expo-app-loading";

const rootReducer = combineReducers({
  meals: mealsReducers,
});

const store = createStore(rootReducer);
const Stack = createNativeStackNavigator();
const Tab =
  Platform.OS === "android"
    ? createMaterialBottomTabNavigator() //for android
    : createBottomTabNavigator(); //for ios

const HomescreenNavigator = () => {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator
        screenOptions={{
          headerStyle: {
            backgroundColor: Colors.primary,
          },
          headerTitleStyle: {
            color: "white",
          },
        }}
      >
        <Stack.Screen
          name="Cateogries"
          component={CategoriesScreen}
          options={{
            title: "Meals Categories",
          }}
        />
        <Stack.Screen
          name="CategoryMeals"
          component={CategoryMealsScreen}
          options={({ route }) => ({ title: route.params.title })}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </View>
  );
};

const FavoriteScreenNavigator = () => {
  return (
    <View style={{ flex: 1 }} collapsable={false}>
      <Stack.Navigator>
        <Stack.Screen
          name="Favorite"
          component={FavoritesScreen}
          options={{
            title: "Your Favorites",
            headerStyle: { backgroundColor: Colors.accentColor },
          }}
        />
        <Stack.Screen
          name="MealDetail"
          component={MealDetailScreen}
          options={({ route }) => ({ title: route.params.name })}
        />
      </Stack.Navigator>
    </View>
  );
};

function DrawerNavigation() {
  return (
    <Tab.Navigator
      tabBarOptions={{
        activeTintColor: Colors.accentColor,
      }}
      activeColor={Platform.OS === "android" ? "white" : Colors.accentColor}
      shifting={true}
    >
      <Tab.Screen
        name="Meals"
        component={HomescreenNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return (
              <Ionicons name="ios-restaurant" size={25} color={tabInfo.color} />
            );
          },
          tabBarColor: Colors.primary,
        }}
      />
      <Tab.Screen
        name="Favorites"
        component={FavoriteScreenNavigator}
        options={{
          tabBarIcon: (tabInfo) => {
            return <Ionicons name="ios-star" size={25} color={tabInfo.color} />;
          },
          tabBarColor: Colors.accentColor,
        }}
      />
    </Tab.Navigator>
  );
}

const Drawer = createDrawerNavigator();

function App() {
  let [fontsLoaded] = useFonts({
    Inter_700Bold,
  });

  if (!fontsLoaded) {
    return <AppLoading />;
  }
  return (
    <Provider store={store}>
      <NavigationContainer>
        <Drawer.Navigator
          screenOptions={{
            drawerStyle: {
              backgroundColor: "whitesmoke",
            },
            drawerLabelStyle: {
              fontFamily: "Inter_700Bold",
              fontSize: 18,
            },
            drawerActiveTintColor: Colors.accentColor,
          }}
        >
          <Drawer.Screen
            name="Meals Cateogries"
            component={DrawerNavigation}
            options={{
              headerShown: false,
              drawerLabel: "Meals",
            }}
          />
          <Drawer.Screen
            name="Filters"
            component={FilterScreen}
            options={{
              headerStyle: {
                backgroundColor: Colors.primary,
              },
              headerTitleStyle: {
                color: "white",
              },
            }}
          />
        </Drawer.Navigator>
      </NavigationContainer>
    </Provider>
  );
}

export default App;
