import { View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { SIZES } from "../../constants/theme";
import Text from "../Textcomp/Index";

interface cardType {
    text: string;
    color: string;
    image:any,
    title: string
  }
export default function Index1({ color, image, title, text }:cardType) {
  return (
    <View style={[tw`p-4 px-6 flex flex-row items-center bg-[${color}]`, { width: SIZES.width * 0.48, height:SIZES.height * 0.1, borderRadius:10}]}>
      <Image
      source={image}
      style={{width:25 , height:25}}
      />
      <View style={tw`ml-2`}>
        {/* title */}
        <Text fontSize={13} lineHeight={13} text={title} color="#ffffff" style={{fontWeight: '700'}} />

        <Text fontSize={13} lineHeight={13} text={text} color="#ffffff" style={{fontWeight: '700', marginTop: 3}} />
      </View>
    </View>
  );
}
