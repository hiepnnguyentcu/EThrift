import React from "react";
import { createStackNavigator } from "@react-navigation/stack";

import { CartTab, Home } from "../screens";
import { Onboard, Login, SignUp } from "../screens";
import ItemDetail from "../screens/Fashion Items/ItemDetail";
import { useLogin } from "../context/LoginProvider";
import CustomDrawer from "./CustomDrawer";
import { HomeScreen } from "../admin_protected/HomeScreen";
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

const AdminStackNavigator = () => {
  return(
    <Stack.Navigator
      screenOptions={{headerShown: false}}>
        <Stack.Screen name="Home_admin" component={HomeScreen}/>

      </Stack.Navigator>
  )
}

const MainStackNavigator = () => {
  const {isLoggedIn} = useLogin()
  return(
    isLoggedIn ? <CustomDrawer/> : <AdminStackNavigator/>
  )
}

export { HomeStackNavigator, OnboardingStackNavigator, AdminStackNavigator, MainStackNavigator };
