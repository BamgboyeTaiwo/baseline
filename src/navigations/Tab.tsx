import { createBottomTabNavigator } from "@react-navigation/bottom-tabs";
import MaterialCommunityIcons from "react-native-vector-icons/MaterialCommunityIcons";
import tw from "twrnc";
import { Entypo } from "@expo/vector-icons";
import { FontAwesome } from "@expo/vector-icons";

import { Ionicons } from '@expo/vector-icons';
import Index from "../screens/Home";
import Assets from "../screens/Assets";
import Saveup from "../screens/Saveup";
import Support from "../screens/Support";
import Account from "../screens/Account";
import TabIcon from "../components/Tabicon";
import { SIZES } from "../constants/theme";
import { icons } from "../constants";
import homeNav from "./homeNav";
import SaveupNav from "./saveupNav";


const Iconp = require('../assets/user.png')

const Tab = createBottomTabNavigator();

function MyTabs() {
  return (
    <Tab.Navigator
      initialRouteName="Home"
      screenOptions={{
        tabBarActiveBackgroundColor: 'white',
        tabBarInactiveBackgroundColor: '#FFFFFF',
        tabBarShowLabel: true,
        tabBarStyle: {
          backgroundColor: '#FFFFFF',
          justifyContent: 'center',
          alignItems: 'center',
          alignSelf: 'center',
          width: SIZES.width,
        },
      }}
    >
      <Tab.Screen
        name="Home"
        component={homeNav}
        options={{
          headerShown: false,
          tabBarItemStyle:{width: 25,},
          tabBarLabel: "Home",
          tabBarIcon: ({ focused, color, size }) => <TabIcon focused={focused} icon={icons.tabicon1} />,
        }}
      />
      <Tab.Screen
        name="Assets"
        component={Assets}
        options={{
          headerShown: false,
          tabBarLabel: "Assets",
          tabBarIcon: ({ focused, color, size }) => <TabIcon focused={focused} icon={icons.tabicon2} />,
        }}
      />
      <Tab.Screen
        name="Save up"
        component={SaveupNav}
        options={{
          headerShown: false,
          tabBarLabel: "Save up",
          tabBarIcon: ({ focused, color, size }) =>  <TabIcon focused={focused} icon={icons.tabicon3} />,
        }}
      />
      <Tab.Screen
        name="Support"
        component={Support}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <TabIcon focused={focused} icon={icons.tabicon4} />
          ),
        })}
      />
      <Tab.Screen
        name="Account"
        component={Saveup}
        options={({route}) => ({
          headerShown: false,
          tabBarIcon: ({focused, color, size}) => (
            <TabIcon focused={focused} icon={icons.tabicon5} />
          ),
        })}
      />
    </Tab.Navigator>
  );
}

export default MyTabs;
