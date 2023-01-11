import { View, Image } from "react-native";
import React from "react";
import tw from "twrnc";
import { SIZES } from "../../constants/theme";
import Text from "../Textcomp/Index";
import { icons } from "../../constants";
import * as Progress from "react-native-progress";

interface cardType {
  text: string;
  color: string;
  image:any,
  title: string,
  location: string,
  rent: number,
  tp: number,
  available: number,
  taken: number,
  interest: any,
}

export default function Index2({ color, image, title, available, taken, interest, rent, tp }: cardType) {
  return (
    <View style={[tw` flex flex-col items-center `, { width: SIZES.width * 0.7, borderRadius: 10 }]}>
      <Image source={image} style={[tw`shadow`, { width: SIZES.width * 0.7, height: SIZES.height * 0.15, borderRadius: 15 }]} />
      <View style={tw`w-full p-1 pt-2 pr-2`}>
        <View style={tw`flex flex-row justify-between`}>
          <View style={tw`flex flex-row items-center`}>
            <View style={tw``}>
              <Text fontSize={13} lineHeight={13} text={title} color="#262C55" style={{ fontWeight: "700" }} />
            </View>
            {/* <View style={tw`ml-1`}>
              <Text fontSize={10} lineHeight={10} text={location} color="#262C55" style={{ fontWeight: "400" }} />
            </View> */}
          </View>
          <Image source={icons.bookmarkicon} resizeMode="contain" style={{ width: 15, height: 15 }} />
        </View>
        <View style={tw`mt-4`}>
          <Text fontSize={13} lineHeight={13} text={"Lorem ipsum"} color="#262C5580" style={{ fontWeight: "600" }} />
          <View style={tw`flex my-1 flex-row justify-between`}>
            <Text fontSize={11} lineHeight={11} text={`${taken} Taken`} color="#262C5580" style={{ fontWeight: "400" }} />
            <Text fontSize={11} lineHeight={11} text={`${available} Available`} color="#262C5580" style={{ fontWeight: "400" }} />
          </View>
          <Progress.Bar progress={0.3} color={'#F1A5C2'} width={SIZES.width * 0.68} borderRadius={4} height={5} />
        </View>
        <View style={tw`flex mt-4 flex-row  items-center`}>
          <View style={tw`border-r pr-2 flex flex-row items-center`}>
            <Text fontSize={13} lineHeight={13} text={`${tp}`} color="#262C55" style={{ fontWeight: "600" }} />
            <Text fontSize={10} lineHeight={10} text={"Per slot"} color="#262C55" style={{ fontWeight: "400", marginLeft: 5 }} />
          </View>
          <View style={tw`ml-2 flex flex-row items-center`}>
            <Text fontSize={12} lineHeight={12} text={interest} color="#262C55" style={{ fontWeight: "500" }} />
          </View>
        </View>
      </View>
    </View>
  );
}
