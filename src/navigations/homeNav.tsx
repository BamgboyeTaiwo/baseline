import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";
import Index from "../screens/Home";
import Productpage from "../screens/Home/productpage";

const Stack = createNativeStackNavigator();

export default function HomeNav() {
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
        name="Productpage"
        options={{
          headerShown: false,
        }}
        component={Productpage}
      />
    </Stack.Navigator>
  );
}
