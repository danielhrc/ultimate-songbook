// Learn more about createBottomTabNavigator:
// https://reactnavigation.org/docs/bottom-tab-navigator
import Ionicons from "@expo/vector-icons/Ionicons";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { createStackNavigator } from "@react-navigation/stack";
import { useColorScheme } from "react-native";

import Colors from "../constants/Colors";
import TabOneScreen from "../screens/TabOneScreen";
import TabTwoScreen from "../screens/TabTwoScreen";
import { createDrawerNavigator } from "@react-navigation/drawer";
import InitialScreen from "../screens/InitialScreen";

const BottomTab = createBottomTabNavigator();

export default function BottomTabNavigator() {
  const colorScheme = useColorScheme();

  return (
    <BottomTab.Navigator
      initialRouteName="TabOne"
      screenOptions={{ tabBarActiveTintColor: Colors[colorScheme].tint }}
    >
      <BottomTab.Screen
        name="Menu"
        component={MenuNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="cog-outline" color={color} />
          ),
        }}
      />
      <BottomTab.Screen
        name="TabOne"
        component={TabOneNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="list-circle-outline" color={color} />
          ),
        }}
      />



      <BottomTab.Screen
        name="Perfil"
        component={TabTwoNavigator}
        options={{
          headerShown: false,
          tabBarIcon: ({ color }) => (
            <TabBarIcon name="person-circle-outline" color={color} />
          ),
        }}
      />
    </BottomTab.Navigator>
  );
}

// You can explore the built-in icon families and icons on the web at:
// https://icons.expo.fyi/
function TabBarIcon(props) {
  return <Ionicons size={30} style={{ marginBottom: -3 }} {...props} />;
}

const MenuDrawer = createDrawerNavigator();
function MenuNavigator() {
  return (
    <MenuDrawer.Navigator screenOptions={{
      headerTintColor: Colors[useColorScheme()].tint,


    }} >
      <MenuDrawer.Screen
        name="Songs"
        component={InitialScreen}
        options={{
          headerTitle: "Songs",
          drawerIcon: ({ color, size }) => (<Ionicons name="reader-outline" size={20} color={Colors[useColorScheme()].tint} />),
        }}
      />
      <MenuDrawer.Screen
        name="Cantos"
        component={TabOneScreen}
        options={{
          headerTitle: "Songs",
          drawerIcon: ({ color, size }) => (<Ionicons name="reader-outline" size={20} color={Colors[useColorScheme()].tint} />),
        }}
      />
    </MenuDrawer.Navigator>
  );
}



// Each tab has its own navigation stack, you can read more about this pattern here:
// https://reactnavigation.org/docs/tab-based-navigation#a-stack-navigator-for-each-tab
const TabOneStack = createStackNavigator();

function TabOneNavigator() {
  return (
    <TabOneStack.Navigator>
      <TabOneStack.Screen
        name="TabOneScreen"
        component={TabOneScreen}
        options={{ headerTitle: "Tab One Title" }}
      />
    </TabOneStack.Navigator>
  );
}

const TabTwoStack = createStackNavigator();

function TabTwoNavigator() {
  return (
    <TabTwoStack.Navigator>
      <TabTwoStack.Screen
        name="TabTwoScreen"
        component={TabTwoScreen}
        options={{ headerTitle: "Tab Two Title" }}
      />
    </TabTwoStack.Navigator>
  );
}
