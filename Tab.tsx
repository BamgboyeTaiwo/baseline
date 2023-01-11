import { 
  View,
  Dimensions,
  Platform,
} from "react-native";
import { useState } from "react";
import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";
// import HomeNav from "../navigation/homeNav";
import LoanNav from "../navigation/AccountNav";
import AccountNav from "../navigation/AccountNav";
import Home from "../navigation/homeNav";

import { Feather } from "@expo/vector-icons";
import { AntDesign } from "@expo/vector-icons";
import Logo3 from "../assets/svgjsx/logo3";

import { CurvedBottomBar } from "react-native-curved-bottom-bar";
import Ionicons from "react-native-vector-icons/Ionicons";
import { NavigationContainer } from "@react-navigation/native";
import Ordersnav from "../navigation/Ordersnav";
import {getFocusedRouteNameFromRoute} from "@react-navigation/native"

const { width, height } = Dimensions.get("window");
const Tab = createBottomTabNavigator();

function MyTabs() {
  const getTabBarVisibility = (route:any)=>{
    const routeName = getFocusedRouteNameFromRoute(route);
    console.log(routeName)
    if(routeName?.includes('Signin') ||routeName?.includes('Myprofile') || routeName?.includes('Requestnav') ||routeName?.includes('Howitworks')){
      return 'none'
    }
    return 'flex'
  }
  return (
    <Tab.Navigator
      initialRouteName="Homep"
      screenOptions={{
        tabBarActiveTintColor: "#C12E36",
        tabBarHideOnKeyboard: true,
        tabBarStyle: {
          shadowOffset: {
            width: 0,
            height: 12,
          },
          shadowOpacity: 0.58,
          shadowRadius: 16.0,
          // elevation: 24,
          shadowColor: "black",
          elevation: Platform.OS === "android" ? 24 : 24,
          borderTopLeftRadius: Platform.OS === "android" ? 35 : 21,
          borderTopRightRadius: Platform.OS === "android" ? 35 : 21,
          backgroundColor: "#fff",
          position: "absolute",
          bottom: 0,
          padding: 5,
          width: "100%",
          height: Platform.OS === "android" ? 64 : 84,
          zIndex: 0, 
        },
      }}
    >
      <Tab.Screen
        name="Orders"
        component={Ordersnav}
        options={{
          headerShown: false,
          tabBarLabel: "Orders",
          tabBarIcon: ({ color, size }) => <Feather name="shopping-cart" color={color} size={size} />,
        }}
      />
      <Tab.Screen
        name="Homep"
        component={Home}
        options={({route})=>({
          tabBarStyle:{display:getTabBarVisibility(route)},
          headerShown: false,
          tabBarLabel: "",
          tabBarIcon: ({ color, size }) => (
            <>
              <View style={tw`bg-white rounded-[2rem]`}>
                <Logo3 />
              </View>
            </>
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={AccountNav}
        options={({route})=>({
          tabBarStyle:{display:getTabBarVisibility(route)},
          headerShown: false,
          tabBarLabel: "Account",
          tabBarIcon: ({ color, size }) => <AntDesign name="contacts" color={color} size={size} />,
        })
      }
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
