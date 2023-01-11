import { View, Text, SafeAreaView, Image, ScrollView, TouchableOpacity } from "react-native";
import React from "react";
import tw from "twrnc";
import Textcomp from "../../components/Textcomp/Index";
import { SIZES, dummy, icons, images } from "../../constants";
import Cardcomp1 from "../../components/Cards/index1";
import Cardcomp2 from "../../components/Cards/index2";

import Featurescomp from "../../components/features/index";
import Featurescomp2 from "../../components/features/index2";

export default function Index({navigation}:any) {
  return (
    <SafeAreaView style={tw`bg-white`}>
      <View style={tw`w-full h-full bg-white `}>
        <View style={tw`px-[5%] pt-[5%]`}>
          <View style={tw`flex flex-row pb-3 justify-between`}>
            <View style={tw`flex flex-row`}>
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

            <View style={tw`flex flex-row`}>
              <TouchableOpacity style={tw`mr-4`} onPress={() => {}}>
                <Image source={icons.search} style={{ width: 20, height: 20 }} />
              </TouchableOpacity>
              <TouchableOpacity onPress={() => {}}>
                <Image source={icons.menu} style={{ width: 25, height: 20 }} />
              </TouchableOpacity>
            </View>
          </View>
        </View>
        <ScrollView showsVerticalScrollIndicator={false}>
          <View style={[tw`px-[5%]`, { marginTop: SIZES.height * 0.04 }]}>
            <Textcomp fontSize={20} lineHeight={20} text="Olumide" color="#262C55" style={{ fontWeight: "700" }} />
          </View>
          <View>
            <ScrollView style={tw`pl-[5%] mt-4`} horizontal showsHorizontalScrollIndicator={false}>
              <View style={tw`mr-4`}>
                <Cardcomp1 color={"#262C55"} image={icons.card_icon11} title={"lorem ipsum"} text={"Lorem ipsum rter"} />
              </View>
              <View style={tw`mr-4`}>
                <Cardcomp1 color={"#3D79EF"} image={icons.card_icon12} title={"Plus Save"} text={"200,000"} />
              </View>
              <View style={tw`mr-4`}>
                <Cardcomp1 color={"#F1A5C2"} image={icons.card_icon13} title={"Plus Target"} text={"Create Account"} />
              </View>
            </ScrollView>
          </View>
          <View>
            <ScrollView style={tw`pl-[5%] my-4`} horizontal showsHorizontalScrollIndicator={false}>
              <View style={tw`mr-4`}>
                <Cardcomp2 color={"#F1A5C233"} image={icons.card_icon1} text={"Lorem ipsu Companies"} />
              </View>
              <TouchableOpacity onPress={()=>{navigation.navigate('Productpage')}} style={tw`mr-4`}>
                <Cardcomp2 color={"#3D79EF33"} image={icons.card_icon2} text={"Lorem"} />
              </TouchableOpacity>
              <View style={tw`mr-4`}>
                <Cardcomp2 color={"#35A16233"} image={icons.card_icon3} text={"Lorem"} />
              </View>
              <View style={tw`mr-4`}>
                <Cardcomp2 color={"#F1A5C233"} image={icons.card_icon4} text={"Lorem"} />
              </View>
              <View style={tw`mr-8`}>
                <Cardcomp2 color={"#262C5533"} image={icons.card_icon5} text={"Create "} />
              </View>
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
              text="Lorem Features in thrtr werefv"
              color="#262C55"
              style={{ fontWeight: "700" }}
            />
            <View style={tw`mt-4`}>
              <Image source={images.landwey} style={[{ width: SIZES.width * 0.9, height: SIZES.height * 0.175 }]} />
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
