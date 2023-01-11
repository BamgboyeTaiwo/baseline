import { View, Text, SafeAreaView, Image, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import { SIZES, icons, images } from "../../constants";
import Textcomp from "../../components/Textcomp/Index";

export default function Index({ navigation }: any) {
  return (
    <SafeAreaView style={tw`bg-white flex-1`}>
      <View style={tw`w-full h-full px-[5%] bg-white `}>
        <View style={tw` pt-[5%]`}>
          <View style={tw`flex flex-row pb-3 justify-between`}>
            <View style={tw`flex flex-row`}>
              <View style={tw`mx-1`}>
                <Textcomp fontSize={20} lineHeight={20} text="Savings" color="#3D79EF" style={{ fontWeight: "700" }} />
              </View>
            </View>

            <View style={tw`flex flex-row pr-2`}>
              <TouchableOpacity onPress={() => {}}>
                <Image source={icons.menu} style={{ width: 25, height: 20 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <View style={tw``}>
          <Textcomp fontSize={16} lineHeight={20} text="#200,0000" color="#262C55" style={{ fontWeight: "700" }} />
        </View>

        <View
          style={[
            tw`p-4 px-4 flex mt-8 rounded-xl justify-between flex-row h-auto items-center bg-[#262C55]`,
            { width: SIZES.width * 0.9 },
          ]}
        >
          <View style={tw`ml-2`}>
            <View style={tw`w-4/5`}>
              <Textcomp
                fontSize={16}
                lineHeight={20}
                text="Complete your account set up"
                color="#FFFFFF"
                style={{ fontWeight: "700" }}
              />
            </View>

            <TouchableOpacity style={[tw`bg-white px-4 py-3 items-center rounded-lg mt-2`, { width: SIZES.width * 0.35 }]}>
              <Textcomp fontSize={12} lineHeight={12} text="Set up account" color="#3D79EF" style={{ fontWeight: "500" }} />
            </TouchableOpacity>
          </View>
          <Image source={icons.card_icon12} style={{ width: 50, height: 50, tintColor: "white" }} />
        </View>
        <View style={[tw`flex flex-row justify-between`, { marginTop: SIZES.height * 0.05 }]}>
          <TouchableOpacity
            onPress={() => navigation.navigate("loremsaveup")}
            style={[tw`bg-[#3D79EF33] p-4 py-6 `, { width: SIZES.width * 0.425, borderRadius: 10 }]}
          >
            <Image source={icons.card_icon12} style={{ width: 25, height: 25, tintColor: "#3D79EF" }} />

            <View style={tw`mt-4`}>
              <Textcomp fontSize={16} lineHeight={20} text="Lorem Save" color="#262C55" style={{ fontWeight: "700" }} />
              <View style={tw`mt-3`}>
                <Textcomp
                  fontSize={12}
                  lineHeight={17}
                  text="Lorem ipsum tryr cgddy dg gdfd gdfdgdgt dvdf ddffdfggdfgfdts f"
                  color="#262C55"
                  style={{ fontWeight: "300" }}
                />
              </View>
              <View style={[tw``, { marginTop: SIZES.height * 0.04 }]}>
                <Textcomp fontSize={16} lineHeight={20} text="₦ 200,000" color="#3D79EF" style={{ fontWeight: "700" }} />
              </View>
            </View>
          </TouchableOpacity>
          <View style={[tw`bg-[#F1A5C233] p-4 py-6 `, { width: SIZES.width * 0.425, borderRadius: 10 }]}>
            <Image source={icons.card_icon13} style={{ width: 25, height: 25, tintColor: "#F1A5C2" }} />

            <View style={tw`mt-4`}>
              <Textcomp fontSize={16} lineHeight={20} text="Lorem Target" color="#262C55" style={{ fontWeight: "700" }} />
              <View style={tw`mt-3`}>
                <Textcomp
                  fontSize={12}
                  lineHeight={17}
                  text="Lorem ipsum tryr cgddy dg gdfd gdfdgdgt dvdf ddffdfggdfgfdts f"
                  color="#262C55"
                  style={{ fontWeight: "300" }}
                />
              </View>
              <View style={[tw``, { marginTop: SIZES.height * 0.04 }]}>
                <Textcomp fontSize={16} lineHeight={20} text="Create Account" color="#F1A5C2" style={{ fontWeight: "700" }} />
              </View>
            </View>
          </View>
          <View style={tw``}></View>
        </View>
      </View>
    </SafeAreaView>
  );
}
