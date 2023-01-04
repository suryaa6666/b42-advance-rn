import * as React from "react";

//Import Navigation Container
import { NavigationContainer } from '@react-navigation/native'

// Import Stack Navigation
import { createStackNavigator } from '@react-navigation/stack'

// Import Theme Native Base

// Import Screen
import FormNativeBase from "./src/screens/formNativeBase";
import Hello from "./src/screens/hello";
import IncDec from "./src/screens/incDec";

// Create Stack Navigation
const Stack = createStackNavigator()

export default function Container() {

  return (
    <NavigationContainer>
      <Stack.Navigator initialRouteName="Form">
        <Stack.Screen name="Hello" component={Hello} />
        <Stack.Screen name="IncDec" component={IncDec} />
        <Stack.Screen name="Form" component={FormNativeBase} options={{
          headerTintColor: "red",
        }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
