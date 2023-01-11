import React from "react";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import Intro from "../screens/intro";

const Stack = createNativeStackNavigator();

export default function AuthNav() {
  return (
    <Stack.Navigator initialRouteName="Intro">
      <Stack.Screen
        name="Intro"
        options={{
          headerShown: false,
        }}
        component={Intro}
      />
    </Stack.Navigator>
  );
}
