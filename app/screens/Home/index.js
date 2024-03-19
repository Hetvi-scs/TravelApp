import {View, Text} from 'react-native';
import React from 'react';
import {size} from '../../theme';

export default function Home() {
  return (
    <View>
      {/* <StatusBar translucent backgroundColor={'transparent'}></StatusBar> */}
      <View
        style={{
          width: size.deviceWidth,
          height: size.moderateScale(410),
          borderBottomLeftRadius: size.moderateScale(48),
          borderBottomRightRadius: size.moderateScale(48),
        }}>
        <Text>hiiiiiii</Text>
      </View>
    </View>
  );
}
