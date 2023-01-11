import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Productpage from "../screens/Home/productpage";
import Index from "../screens/Saveup";
import loremsaveup from "../screens/Saveup/loremsaveup";

const Stack = createNativeStackNavigator();

export default function SaveupNav() {
  return (
    <Stack.Navigator initialRouteName="Index">
      <Stack.Screen
        name="Index"
        options={{
          headerShown: false,
        }}
        component={Index}
      />
      <Stack.Screen
        name="loremsaveup"
        options={{
          headerShown: false,
        }}
        component={loremsaveup}
      />
    </Stack.Navigator>
  );
}
