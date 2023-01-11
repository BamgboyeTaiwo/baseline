import React from 'react';
import {View, Image} from 'react-native';

const TabIcon = ({focused, icon}) => {
  return (
    <View
      style={{
        alignItems: 'center',
        justifyContent: 'center',
      }}>
      <Image
        source={icon}
        resizeMode="contain"
        style={{
          width: 22,
          height: 22,
          tintColor: focused ? '#3D79EF' : '#262C55',
        }}
      />
    </View>
  );
};

export default TabIcon;
