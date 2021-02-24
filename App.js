import * as React from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createStackNavigator } from "@react-navigation/stack";

import Home from "./screens/Home";
import Saved from "./screens/Saved";

const Stack = createStackNavigator();

function App() {
  return (
    <NavigationContainer>
      <Stack.Navigator>
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ title: "Cat Photos" }}
        />
        <Stack.Screen name="Details" component={Saved} />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

export default App;
