import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CartTab, Home } from "../screens";
import { Onboard, Login, SignUp } from "../screens";
import ItemDetail from "../screens/Fashion Items/ItemDetail";

const Stack = createStackNavigator();

const HomeStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Home" component={Home} />
      <Stack.Screen name="Detail" component={ItemDetail} />
      <Stack.Screen name="Cart" component={CartTab} />
    </Stack.Navigator>
  );
};

const OnboardingStackNavigator = () => {
  return (
    <Stack.Navigator
      screenOptions={{
        headerShown: false,
      }}
    >
      <Stack.Screen name="Onboard" component={Onboard} />
      <Stack.Screen name="Login" component={Login}/>
      <Stack.Screen name="Sign Up" component={SignUp}/>

      
    </Stack.Navigator>
  );
};

export { HomeStackNavigator, OnboardingStackNavigator };
