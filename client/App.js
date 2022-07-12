import React from "react";
import { createStackNavigator } from "@react-navigation/stack";
import { NavigationContainer } from "@react-navigation/native";
import CustomDrawer from "./navigation/CustomDrawer";
import ItemDetail from "./screens/Fashion Items/ItemDetail";
import { createStore, applyMiddleware } from "redux";
import { Provider } from "react-redux";

import rootReducer from "./stores/rootReducer";
import thunk from 'redux-thunk';

const Stack = createStackNavigator();

const store = createStore(rootReducer, applyMiddleware(thunk));

const App = () => {
  return (
    <Provider store={store}>
      <NavigationContainer>
        <CustomDrawer/>
        
      </NavigationContainer>
    </Provider>
  );
};

export default App;

