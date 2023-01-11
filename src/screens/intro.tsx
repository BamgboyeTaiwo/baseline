import { View, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React, { useRef } from "react";
import tw from "twrnc";
import { SIZES, icons } from "../constants";
import Text from "../components/Textcomp/Index";
import { createNavigationContainerRef, useNavigation } from "@react-navigation/native";
import { navigate } from "../navigations/rNavigation";

export default function Intro({navigation}:any) {
//   const navigation = useNavigation();

  const nav = (name: any, params: any) => {
    if (navigationRef.isReady()) {
      // Perform navigation if the react navigation is ready to handle actions
      navigationRef.navigate(name, params);
    } else {
      // You can decide what to do if react navigation is not ready
      // You can ignore this, or add these actions to a queue you can call later
      console.log('error');
      
    }
  };

  return (
    <SafeAreaView style={tw`h-full w-full bg-[#F5F5F5]`}>
      <View style={tw`h-full w-full pt-4`}>
        <View style={tw`flex flex-row mx-auto items-center justify-center`}>
          <Image source={icons.logo} style={{ width: 25, height: 25 }} />
          <View style={tw`my-auto`}>
            <Text fontSize={22} lineHeight={22} text={"baseline"} color="#262C55" style={{ fontWeight: "700" }} />
          </View>
        </View>

        <View style={[tw`mx-auto`, { marginTop: SIZES.height * 0.05 }]}>
          <Image source={icons.logo} style={{ width: SIZES.width * 0.88, height: SIZES.height * 0.3 }} />
        </View>

        <View style={[tw`mx-auto mt-4`, { marginTop: SIZES.height * 0.05 }]}>
          <Text
            fontSize={17}
            lineHeight={18}
            text={"Lorem ipsum fgftr reer ut ta rtr ar gxnshsryerbre retetrtr"}
            color="#262C55"
            style={{ fontWeight: "700", textAlign: "center" }}
          />
        </View>

        <View style={[tw`mx-auto flex flex-row`, { marginTop: SIZES.height * 0.05 }]}>
          <View style={[tw`bg-[#3D79EF33] mx-1 rounded-full h-1`, { width: 20 }]} />
          <View style={[tw`bg-[#C5D7FA] mx-1 rounded-full h-1`, { width: 20 }]} />
          <View style={[tw`bg-[#3D79EF] mx-1 rounded-full h-1`, { width: 20 }]} />
          <View style={[tw`bg-[#3D79EF33] mx-1 rounded-full h-1`, { width: 20 }]} />
          <View style={[tw`bg-[#3D79EF33] mx-1 rounded-full h-1`, { width: 20 }]} />
        </View>

        <View style={[tw`mx-auto flex flex-row justify-between`, { marginTop: SIZES.height * 0.05 }]}>
          <TouchableOpacity
            onPress={() => {nav('MyTabs',{})}}
            style={[
              tw`bg-[#3D79EF] mr-4 items-center justify-center`,
              { width: SIZES.width * 0.4, borderRadius: 10, height: SIZES.height * 0.06 },
            ]}
          >
            <Text
              fontSize={17}
              lineHeight={18}
              text={"Login"}
              color="#FFFFFF"
              style={{ fontWeight: "700", textAlign: "center" }}
            />
          </TouchableOpacity>
          <TouchableOpacity
            onPress={() => {}}
            style={[
              tw`bg-[#262C55] bg-opacity-10 border border-[#262C5580] items-center justify-center`,
              { width: SIZES.width * 0.4, borderRadius: 10, height: SIZES.height * 0.06 },
            ]}
          >
            <Text
              fontSize={17}
              lineHeight={18}
              text={"Create Account"}
              color="#262C55"
              style={{ fontWeight: "700", textAlign: "center" }}
            />
          </TouchableOpacity>
        </View>
      </View>
    </SafeAreaView>
  );
}
