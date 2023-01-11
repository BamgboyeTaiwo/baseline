import { View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { SIZES } from "../../constants/theme";
import Text from "../Textcomp/Index";
import { icons } from "../../constants";

interface cardType {
  text: string;
  color: string;
  image:any,
  title: string,
  location: string,
  rent: number,
  tp: number
}

export default function Index({ color, image, title, location, rent, tp }: cardType) {
  return (
    <View style={[tw` flex flex-col items-center `, { width: SIZES.width * 0.7, borderRadius: 10 }]}>
      <Image source={image} style={[tw`shadow`, { width: SIZES.width * 0.7, height: SIZES.height * 0.15, borderRadius: 15 }]} />
      <View style={tw`w-full p-1 pt-2 pr-2`}>
        <View style={tw`flex flex-row justify-between`}>
          <View style={tw`flex flex-row items-center`}>
            <View style={tw` border-r-2 border-[#262C5533] pr-1`}>
              <Text fontSize={13} lineHeight={13} text={title} color="#262C55" style={{ fontWeight: "700" }} />
            </View>
            <View style={tw`ml-1`}>
              <Text fontSize={10} lineHeight={10} text={location} color="#262C55" style={{ fontWeight: "400" }} />
            </View>
          </View>
          <Image source={icons.bookmarkicon} resizeMode="contain" style={{ width: 15, height: 15 }} />
        </View>
        <View style={tw`flex mt-4 flex-row  items-center`}>
          <View style={tw`border-r border-[#262C5533] pr-2`}>
            <Text fontSize={13} lineHeight={13} text={`₦${rent}`} color="#262C55" style={{ fontWeight: "600" }} />
          </View>
          <View style={tw`ml-2 flex flex-row items-center`}>
            <Text fontSize={12} lineHeight={12} text={`₦${tp}`} color="#262C55" style={{ fontWeight: "600" }} />
            <Text fontSize={10} lineHeight={10} text={'Package'} color="#262C55" style={{ fontWeight: "400", marginLeft:5 }} />
          </View>
        </View>
      </View>
    </View>
  );
}
