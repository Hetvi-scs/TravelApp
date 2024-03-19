import {View, Text} from 'react-native';
import React from 'react';
import {size} from '../../theme';

export default function SplashScreen() {
  return (
    <View>
      <View
        style={{
          height: size.moderateScale(400),
          backgroundColor: 'red',
          borderBottomLeftRadius: size.moderateScale(48),
          borderBottomRightRadius: size.moderateScale(48),
        }}>
        <View></View>
      </View>
      <View
        style={{
          height: size.deviceHeight - size.moderateScale(400),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            backgroundColor: 'blue',
            height: size.moderateScale(121),
          }}>
          <View>
            <Text>Tripify</Text>
          </View>
          <View>
            <Text>
              The ultimate travel app for easy multi-city adventures. Plan,
              book, and explore hassle-free.
            </Text>
          </View>
        </View>
        <View
          style={{
            backgroundColor: 'blue',
            height: size.moderateScale(72),
            width: size.moderateScale(72),
            borderRadius: size.moderateScale(72),
          }}></View>
      </View>
    </View>
  );
}
