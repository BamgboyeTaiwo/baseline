import { View, Text } from "react-native";
import React from "react";
import tw from "twrnc";

//---@@ interface for dynamic Text component
interface textType {
  fontSize: number;
  lineHeight: number;
  text: string;
  color: string;
  style: any
}
export default function Index({ fontSize, lineHeight, text, color, style }: textType) {
  return (
    <Text
      style={[
        tw``,
        {
          fontSize: fontSize,
          lineHeight: lineHeight,
          color: color,
        },
        {...style}
      ]}
    >
      {text}
    </Text>
  );
}
