import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import Textcomp from "../../components/Textcomp/Index";
import { SIZES, dummy, icons, images } from "../../constants";
import Featurescomp from "../../components/features/index";
import Featurescomp2 from "../../components/features/index2";
import { AntDesign } from "@expo/vector-icons";

export default function Productpage({ navigation }: any) {
  return (
    <SafeAreaView style={tw`bg-white`}>
      <View style={tw`w-full h-full bg-white `}>
        <View style={tw`px-[5%] pt-[5%]`}>
          <View style={tw`flex flex-row pb-3 justify-between`}>
            <View style={tw`flex flex-row items-center`}>
              <TouchableOpacity
                style={tw`mr-2`}
                onPress={() => {
                  navigation.goBack();
                }}
              >
                <AntDesign name="arrowleft" size={24} color="#262C55" />
              </TouchableOpacity>
              <Textcomp fontSize={14} lineHeight={14} text="Lorem Ipsumu" color="#262C55" style={{ fontWeight: "700" }} />
            </View>
            <View style={tw`flex flex-row items-center`}>
              <Image source={icons.location} resizeMode="contain" style={{ width: 12, height: 12 }} />
              <View style={tw`mx-1`}>
                <Textcomp
                  fontSize={14}
                  lineHeight={14}
                  text="Lekki, Lagos, Nigeria"
                  color="#262C55"
                  style={{ fontWeight: "500" }}
                />
              </View>

              <Image source={icons.dropdown} resizeMode="contain" style={{ width: 12, height: 12 }} />
            </View>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          {/* <View style={[tw`px-[5%]`, { marginTop: SIZES.height * 0.04 }]}>
            <Textcomp fontSize={20} lineHeight={20} text="Olumide" color="#262C55" style={{ fontWeight: "700" }} />
          </View> */}

          <ScrollView style={tw`pl-[5%]`} horizontal showsHorizontalScrollIndicator={false}>
            <View style={tw`flex flex-row px-2 mt-6`}>
              <TouchableOpacity style={tw`bg-[#3D79EF33] p-2 px-4 rounded-xl`}>
                <Textcomp fontSize={10} lineHeight={10} text="Landwey" color="#3D79EF" style={{ fontWeight: "400" }} />
              </TouchableOpacity>
              {dummy.category.map((item, index) => {
                return (
                  <TouchableOpacity key={index} style={tw`bg-[#3D79EF33] mx-2 p-2 px-4 rounded-xl`}>
                    <Textcomp fontSize={10} lineHeight={10} text={item.category} color="#3D79EF" style={{ fontWeight: "400" }} />
                  </TouchableOpacity>
                );
              })}
            </View>
          </ScrollView>

          <View style={tw`pl-[5%] py-8`}>
            <Textcomp fontSize={14} lineHeight={14} text="Lorem Ipsumusa dare" color="#262C55" style={{ fontWeight: "700" }} />
            <ScrollView style={tw` mt-4`} horizontal showsHorizontalScrollIndicator={false}>
              {dummy.featuresList.map((items, index) => {
                return (
                  <View style={tw`${index === 0 ? "mr-2" : "mx-2"}`}>
                    <Featurescomp
                      key={index}
                      color={"#F1A5C2"}
                      image={images.featuresimg1}
                      title={"Lorem Ipsumusa dare"}
                      location={"Surulere"}
                      rent={"₦700,000"}
                      tp={"₦700,000"}
                    />
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View style={tw`h-2 bg-[#262C55] bg-opacity-10`} />
          <View style={tw`pl-[5%] py-8`}>
            <Textcomp fontSize={14} lineHeight={14} text="Lorem Features" color="#262C55" style={{ fontWeight: "700" }} />
            <ScrollView style={tw` mt-4`} horizontal showsHorizontalScrollIndicator={false}>
              {dummy.featuresList.map((items, index) => {
                return (
                  <View style={tw`${index === 0 ? "mr-2" : "mx-2"}`}>
                    <Featurescomp
                      key={index}
                      color={"#F1A5C2"}
                      image={images.featuresimg1}
                      title={"Lorem Ipsumusa dare"}
                      location={"Surulere"}
                      rent={"₦700,000"}
                      tp={"₦700,000"}
                    />
                  </View>
                );
              })}
            </ScrollView>
          </View>
          <View style={tw`h-2 bg-[#262C55] bg-opacity-10`} />
          <View style={tw`pl-[5%] py-8`}>
            <Textcomp
              fontSize={14}
              lineHeight={14}
              text="Lorem Features in thrtr werefv"
              color="#262C55"
              style={{ fontWeight: "700" }}
            />
            <ScrollView style={tw` mt-4`} horizontal showsHorizontalScrollIndicator={false}>
              {dummy.featuresList2.map((items, index) => {
                return (
                  <View style={tw`${index === 0 ? "mr-2" : "mx-2"}`}>
                    <Featurescomp2
                      key={index}
                      color={"#F1A5C2"}
                      image={items.image}
                      title={"Lorem Ipsumusa dare"}
                      location={"Surulere"}
                      tp={"₦700,000"}
                      taken={items.taken}
                      available={items.available}
                      interest={items.interest}
                    />
                  </View>
                );
              })}
            </ScrollView>
          </View>

          <View style={[tw`w-full px-[5%]`, { marginTop: SIZES.height * 0.05 }]}>
            <Textcomp
              fontSize={14}
              lineHeight={14}
              text="Lorem Features"
              color="#262C55"
              style={{ fontWeight: "700" }}
            />
            <View style={tw`mt-6 `}>
              <Image source={images.landwey} style={[tw`w-full`,{ height: SIZES.height * 0.175 }]} />
            </View>
            <View style={tw`flex flex-row justify-between px-2 pt-4`}>
              <Textcomp fontSize={14} lineHeight={14} text="Landwey" color="#262C55" style={{ fontWeight: "700" }} />

              <View style={tw`flex flex-row items-center`}>
                <Image source={icons.star} resizeMode="contain" style={{ width: 10, height: 10 }} />
                <Textcomp
                  fontSize={10}
                  lineHeight={10}
                  text="4.5"
                  color="#262C55"
                  style={{ fontWeight: "700", marginHorizontal: 5 }}
                />
                <Image source={icons.bookmarkicon} resizeMode="contain" style={{ width: 10, height: 10 }} />
              </View>
            </View>
            <View style={tw`flex flex-row px-2 mt-6`}>
              <View style={tw`bg-[#3D79EF33] p-2 px-4 rounded-xl`}>
                <Textcomp fontSize={10} lineHeight={10} text="Landwey" color="#3D79EF" style={{ fontWeight: "400" }} />
              </View>
              <View style={tw`bg-[#3D79EF33] mx-2 p-2 px-4 rounded-xl`}>
                <Textcomp fontSize={10} lineHeight={10} text="Landwey" color="#3D79EF" style={{ fontWeight: "400" }} />
              </View>
              <View style={tw`bg-[#3D79EF33] mx-2 p-2 px-4 rounded-xl`}>
                <Textcomp fontSize={10} lineHeight={10} text="Landwey" color="#3D79EF" style={{ fontWeight: "400" }} />
              </View>
            </View>
          </View>

          <View style={tw`h-20`} />
        </ScrollView>
      </View>
    </SafeAreaView>
  );
}
