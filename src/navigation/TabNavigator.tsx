import React from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import { NavigationContainer } from "@react-navigation/native";
import { Ionicons } from "@expo/vector-icons";
import HomeScreen from "../screens/HomeScreen";
import PortfolioScreen from "../screens/PortfolioScreen";
import SettingScreen from "../screens/SettingScreen";

const Tab = createBottomTabNavigator();

const TabNavigator = () => {
  return (
    <NavigationContainer>
      <Tab.Navigator screenOptions={{ headerShown: false, tabBarStyle: { backgroundColor: "#fff" } }}>
        <Tab.Screen name="Beranda" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="home-outline" size={24} color={color} /> }} />
        <Tab.Screen name="Portofolio" component={PortfolioScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="briefcase-outline" size={24} color={color} /> }} />
        <Tab.Screen name="QRIS" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="qr-code-outline" size={24} color={color} /> }} />
        <Tab.Screen name="Sukha" component={HomeScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="bag-outline" size={24} color={color} /> }} />
        <Tab.Screen name="Pengaturan" component={SettingScreen} options={{ tabBarIcon: ({ color }) => <Ionicons name="star-outline" size={24} color={color} /> }} />
      </Tab.Navigator>
    </NavigationContainer>
  );
};

export default TabNavigator;