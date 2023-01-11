import { View, Text } from "react-native";
import React, { useRef, useState } from "react";
import { NavigationContainer, createNavigationContainerRef } from "@react-navigation/native";
import MyTabs from "./Tab";
import Intro from "../screens/intro";
import AuthNav from "./authNav";
import HomeNav from "./homeNav";
import { navigationRef } from "./rNavigation";

export default function RootNav() {
  const [loggedIn, setloggedIn] = useState(false);
  const navigationRef = useRef(null);
  return (
    <>
      {loggedIn ? (
        <>
          <NavigationContainer ref={navigationRef}>
            <Intro />
          </NavigationContainer>
        </>
      ) : (
        <NavigationContainer ref={navigationRef}>
          <MyTabs />
        </NavigationContainer>
      )}
    </>
  );
}
