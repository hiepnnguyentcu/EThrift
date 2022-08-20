import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import {
  MainStackNavigator,
  OnboardingStackNavigator,
} from "./navigation/StackNavigator";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./stores/rootReducer";
import thunk from "redux-thunk";
import LoginProvider from "./context/LoginProvider";

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <LoginProvider>
      <Provider store={store}>
        <NavigationContainer>
          <MainStackNavigator/>
        </NavigationContainer>
      </Provider>
    </LoginProvider>
  );
};

export default App;
