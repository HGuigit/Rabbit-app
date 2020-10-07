import React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { Image, Text } from "react-native";
import pomodoroImg from "./assets/tomate.png";
import profileImg from "./assets/profile.png";
import { createMaterialBottomTabNavigator } from "@react-navigation/material-bottom-tabs";

import Home from "./pages/Home/index";
import Teste from "./pages/Teste/index";

const Tab = createMaterialBottomTabNavigator();

export default function Routes() {
  return (
    <NavigationContainer>
      <Tab.Navigator
        initialRouteName="Home"
        activeColor="#fff"
        barStyle={{ backgroundColor: "#4F3C75" }}
      >
        <Tab.Screen
          name="Home"
          component={Home}
          tabBarColor="#4F3C75"
          options={{
            tabBarLabel: "",
            tabBarIcon: () => <Image source={pomodoroImg} />,
          }}
        />
        <Tab.Screen
          name="Teste"
          component={Teste}
          tabBarColor="#4F3C75"
          options={{
            tabBarLabel: "",
            tabBarIcon: () => <Image source={profileImg} />,
          }}
        />
      </Tab.Navigator>
    </NavigationContainer>
  );
}
