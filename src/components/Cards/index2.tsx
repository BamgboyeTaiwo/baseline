import { View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { SIZES } from "../../constants/theme";
import Text from "../Textcomp/Index";

interface cardType {
    text: string;
    color: string;
    image:any,
  }
export default function Index2({ color, image, text }:cardType) {
  return (
    <View style={[tw`p-4 justify-center items-center  bg-[${color}]`, { width: SIZES.width * 0.26, height:SIZES.height * 0.1, borderRadius:10}]}>
      <Image
      source={image}
      style={{width:25 , height:25}}
      />
      <View style={tw`mt-2`}>
        <Text fontSize={10} lineHeight={13} text={text} color="#262C55" style={{fontWeight: '500'}} />
      </View>
    </View>
  );
}
