import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CartTab, Home } from "../screens";
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
    </Stack.Navigator>
  );
};



export { HomeStackNavigator };
