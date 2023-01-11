import { View, Text, SafeAreaView, Image, TouchableOpacity, ScrollView } from "react-native";
import React, { useState } from "react";
import tw from "twrnc";
import { SIZES, dummy, icons } from "../../constants";
import Textcomp from "../../components/Textcomp/Index";
import { AntDesign } from "@expo/vector-icons";

export default function Loremsaveup({navigation}:any) {
  const [trans, settrans] = useState("All");
  return (
    <SafeAreaView style={tw`bg-[#F5F5F5] px-[4%]`}>
      <View style={tw`h-full w-full`}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <TouchableOpacity onPress={()=> navigation.goBack()} style={tw`px-[5%]`}>
            <AntDesign name="arrowleft" size={24} color="#3D79EF" />
          </TouchableOpacity>
          <View style={tw` mx-auto mt-4`}>
            <Textcomp fontSize={14} lineHeight={14} text="Lorem Save (9%)" color="#262C55" style={{ fontWeight: "700" }} />
            <Textcomp
              fontSize={20}
              lineHeight={20}
              text="#200,000"
              color="#3D79EF"
              style={{ fontWeight: "700", marginTop: SIZES.height * 0.02 }}
            />
          </View>
          <View style={tw`mt-8 mx-auto border-[#262C5533] border rounded-full px-4 items-center  flex flex-row`}>
            <View style={tw`border-r border-[#262C5533] py-2.5 px-2 `}>
              <Textcomp fontSize={14} lineHeight={14} text="Available Balance" color="#262C55" style={{ fontWeight: "500" }} />
            </View>
            <View style={tw` pl-2.5`}>
              <Textcomp fontSize={14} lineHeight={14} text="#1,200,000" color="#3D79EF" style={{ fontWeight: "500" }} />
            </View>
          </View>
          <View style={tw`mx-auto`}></View>

          <View style={[tw`flex px-[5%] flex-row justify-between`, { marginTop: SIZES.height * 0.05 }]}>
            <View style={[tw`bg-white p-4 rounded-lg`, { width: SIZES.width * 0.4 }]}>
              <Textcomp fontSize={10} lineHeight={10} text="Interest P.A" color="#3D79EF" style={{ fontWeight: "400" }} />
              <Textcomp fontSize={14} lineHeight={14} text="9%" color="#262C55" style={{ fontWeight: "700", marginTop: 10 }} />
            </View>
            <View style={[tw`bg-white p-4 rounded-lg`, { width: SIZES.width * 0.4 }]}>
              <Textcomp fontSize={10} lineHeight={10} text="Withdrawals" color="#3D79EF" style={{ fontWeight: "400" }} />
              <Textcomp fontSize={14} lineHeight={14} text="0" color="#262C55" style={{ fontWeight: "700", marginTop: 10 }} />
            </View>
          </View>

          <View style={[tw`border border-[#262C5533] p-4 pb-6 shadow-lg rounded-lg mx-auto mt-6`, { width: SIZES.width * 0.9 }]}>
            <View style={tw`mx-auto`}>
              <Textcomp
                fontSize={14}
                lineHeight={14}
                text="Fund Your Crest Save"
                color="#262C5580"
                style={{ fontWeight: "500" }}
              />
            </View>
            <View style={tw``}></View>

            <View style={tw`flex flex-row mx-auto mt-4`}>
              <View style={tw`rounded-full px-4 py-3 mr-3  bg-[#3D79EF] bg-opacity-10 items-center flex flex-row`}>
                <Image source={icons.fund} style={{ width: 15, height: 15 }} />
                <Textcomp
                  fontSize={14}
                  lineHeight={14}
                  text="Fund Wallet"
                  color="#3D79EF"
                  style={{ fontWeight: "700", marginLeft: 5 }}
                />
              </View>
              <View style={tw`rounded-full px-4 py-3 bg-[#3D79EF] bg-opacity-10 items-center flex flex-row`}>
                <Image source={icons.withdraw} style={{ width: 15, height: 15 }} />
                <View style={tw`ml-1`}>
                  <Textcomp fontSize={14} lineHeight={14} text="Fund Wallet" color="#3D79EF" style={{ fontWeight: "700" }} />
                </View>
              </View>
            </View>
            <View style={tw`mx-auto mt-3 w-[85%]`}>
              <Textcomp
                fontSize={10}
                lineHeight={12}
                text="Duis interdum, sapien in ullamcorper vulputate, mauris lacus ultrices elit, eu euismod purus eros a risus. Sed dapibus est risus, eu hendrerit felis consectetur vitae."
                color="#262C55"
                style={{ fontWeight: "400" }}
              />
            </View>
          </View>

          {/* transactions */}
          <View style={[tw`px-[5%]`, { marginTop: SIZES.height * 0.06 }]}>
            <Textcomp fontSize={14} lineHeight={14} text="My Transactions" color="#262C55" style={{ fontWeight: "800" }} />
          </View>

          <View style={[tw`border border-[#262C5533] p-4 shadow-lg rounded-lg mx-auto mt-6`, { width: SIZES.width * 0.9 }]}>
            <View style={tw`flex flex-row justify-between border-b border-[#262C5533] pb-4`}>
              <TouchableOpacity
                onPress={() => settrans("All")}
                style={tw`bg-[#3D79EF] ${trans === "All" ? "" : "bg-opacity-20"} px-6 py-2 rounded-full`}
              >
                <Textcomp
                  fontSize={14}
                  lineHeight={14}
                  text="All"
                  color={trans === "All" ? "#FFFFFF" : "#3D79EF"}
                  style={{ fontWeight: "500" }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => settrans("Credit")}
                style={tw`bg-[#3D79EF] ${
                  trans === "Credit" ? "" : "bg-opacity-20"
                } border border-[#3D79EF] px-6 py-2 rounded-full`}
              >
                <Textcomp
                  fontSize={14}
                  lineHeight={14}
                  text="Credit"
                  color={trans === "Credit" ? "#FFFFFF" : "#3D79EF"}
                  style={{ fontWeight: "500" }}
                />
              </TouchableOpacity>
              <TouchableOpacity
                onPress={() => settrans("Debit")}
                style={tw`bg-[#3D79EF] ${trans === "Debit" ? "" : "bg-opacity-20"} px-6 py-2 rounded-full`}
              >
                <Textcomp
                  fontSize={14}
                  lineHeight={14}
                  text="Debit"
                  color={trans === "Debit" ? "#FFFFFF" : "#3D79EF"}
                  style={{ fontWeight: "500" }}
                />
              </TouchableOpacity>
            </View>

            <View style={tw`mt-4`}>
              {dummy.featuresList.map((item, index) => {
                return (
                  <View key={index} style={tw`flex mb-4 mt-2 flex-row justify-between`}>
                    <View style={tw`flex flex-row`}>
                      <View style={tw`h-2 w-2 mt-1 mr-1 rounded-full bg-[${index % 2 === 0 ? "#D13852" : "#35A162"}]`}></View>
                      <View style={tw``}>
                        <Textcomp
                          fontSize={10}
                          lineHeight={12}
                          text="Funding Made"
                          color="#262C55"
                          style={{ fontWeight: "700" }}
                        />

                        <View style={tw`mt-2`}>
                          <Textcomp
                            fontSize={10}
                            lineHeight={12}
                            text="Date: Fri, 14 Oct 2022 11:45:04 GMT"
                            color="#262C5580"
                            style={{ fontWeight: "400" }}
                          />
                        </View>
                      </View>
                    </View>
                    <View style={tw``}>
                      <Textcomp fontSize={12} lineHeight={12} text="#200,000.00" color="#262C55" style={{ fontWeight: "700" }} />
                    </View>
                  </View>
                );
              })}
            </View>
          </View>

          <View style={tw`h-20`} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
