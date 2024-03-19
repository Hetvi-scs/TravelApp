import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IcGreenActiveStar,
  IcRightsideArrow,
  IcRightwhitearrow,
  IcWhitetower,
  color,
  fontSize,
  fonts,
  images,
  size,
} from '../../theme';
import Rightwhitearrow from '../../theme/images/svg/Rightwhitearrow';

export default function SplashScreen() {
  return (
    <View>
      <View
        style={{
          width: size.deviceWidth,
          height: size.moderateScale(400),
          borderBottomLeftRadius: size.moderateScale(48),
          borderBottomRightRadius: size.moderateScale(48),
        }}>
        <View
          style={{
            position: 'absolute',
            zIndex: 2,
            margin: size.moderateScale(20),
          }}>
          <IcWhitetower />
        </View>
        <Image
          source={images.hotel}
          style={{
            width: size.deviceWidth,
            height: size.moderateScale(400),
            borderBottomLeftRadius: size.moderateScale(48),
            borderBottomRightRadius: size.moderateScale(48),
          }}
        />
      </View>
      <View
        style={{
          height: size.deviceHeight - size.moderateScale(400),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <View
          style={{
            height: size.moderateScale(150),
            marginHorizontal: size.moderateScale(25),
          }}>
          <View>
            <Text
              style={{
                fontSize: fontSize.big,
                fontFamily: fonts.PoppinsMedium,
                color: color.lightblack,
                textAlign: 'center',
              }}>
              Tripify
            </Text>
          </View>
          <View>
            <Text
              style={{
                fontSize: fontSize.medium,
                fontFamily: fonts.PoppinsLight,
                color: color.semiblack,
                textAlign: 'center',
              }}>
              The ultimate travel app for easy multi-city adventures. Plan,
              book, and explore hassle-free.
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <View
            style={{
              marginVertical: size.moderateScale(10),
              backgroundColor: color.orange,
              height: size.moderateScale(72),
              width: size.moderateScale(72),
              borderRadius: size.moderateScale(72),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <IcRightwhitearrow />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
