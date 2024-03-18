import {View, Text} from 'react-native';
import React from 'react';
import {
  IcBlueDots,
  IcBluePlane,
  IcLocation,
  color,
  fontSize,
  fonts,
  size,
} from '../../theme';

export default function CreateOwn() {
  return (
    <View
      style={{
        marginHorizontal: size.moderateScale(25),
        height: size.moderateScale(192),
        borderWidth: size.moderateScale(1),
        borderColor: color.lightwhite,
        borderRadius: size.moderateScale(8),
      }}>
      <View
        style={{
          height: size.moderateScale(50),
          borderBottomColor: color.lightwhite,
          borderBottomWidth: size.moderateScale(2),
          justifyContent: 'center',
        }}>
        <Text
          style={{
            fontSize: fontSize.medium,
            fontFamily: fonts.PoppinsMedium,
            color: color.extralightblack,
            marginHorizontal: size.moderateScale(10),
          }}>
          Flight 1
        </Text>
      </View>
      <View>
        <View
          style={{
            height: size.moderateScale(80),
            // backgroundColor: 'blue',
            flexDirection: 'row',
          }}>
          <View
            style={{
              width: '16%',
              height: '100%',
              borderWidth: 1,
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <IcBluePlane />
            <IcBlueDots />
            {/* <IcB /> */}
          </View>
          <View
            style={{
              flex: 1,
              height: '100%',
              flexDirection: 'row',
            }}>
            <View
              style={{
                flex: 1,
                height: '50%',
                backgroundColor: 'white',
              }}></View>
            <View></View>
          </View>
          <View
            style={{
              width: '20%',
              height: '100%',
              backgroundColor: 'yellow',
            }}></View>
        </View>
        <View
          style={{
            height: size.moderateScale(60),
            backgroundColor: 'red',
          }}></View>
      </View>
    </View>
  );
}
