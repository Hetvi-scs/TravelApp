import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import {color, fontSize, fonts, size} from '../../theme';

const Tab = createMaterialTopTabNavigator();
export default function CustomeTabBar({
  type,
  border,
  onpress1,
  onpress2,
  text1,
  text2,
}) {
  if (type == 'three') {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: 10,
            borderWidth: 1.5,
            marginHorizontal: size.moderateScale(25),
            borderColor: 'rgba(11, 146, 158, 1)',
            height: size.moderateScale(44),
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <TouchableOpacity>
            <View
              style={{
                backgroundColor: 'rgba(28, 154, 165, 0.05)',
                borderWidth: 1,
                borderColor: 'rgba(11, 146, 158, 1)',
                width: size.moderateScale(80),
                borderRadius: 5,
                height: size.moderateScale(30),
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: size.moderateScale(25),
              }}>
              <Text
                style={{
                  fontSize: fontSize.extrasmall,
                  fontFamily: fonts.PoppinsRegular,
                  color: color.rama,
                }}>
                Upcoming
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                // backgroundColor: 'rgba(28, 154, 165, 0.05)',
                // borderWidth: 1,
                // borderColor: 'rgba(11, 146, 158, 1)',
                width: size.moderateScale(80),
                // borderRadius: 5,
                // height: size.moderateScale(30),
                // alignItems: 'center',
                // justifyContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: fontSize.extrasmall,
                  fontFamily: fonts.PoppinsRegular,
                  color: color.lightblack,
                }}>
                Completed
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity>
            <View
              style={{
                // backgroundColor: 'rgba(28, 154, 165, 0.05)',
                // borderWidth: 1,
                // borderColor: 'rgba(11, 146, 158, 1)',
                width: size.moderateScale(80),
                // borderRadius: 5,
                // height: size.moderateScale(30),
                // alignItems: 'center',
                // justifyContent: 'center',
                marginHorizontal: size.moderateScale(30),
              }}>
              <Text
                style={{
                  fontSize: fontSize.extrasmall,
                  fontFamily: fonts.PoppinsRegular,
                  color: color.lightblack,
                }}>
                Cancelled
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  } else {
    return (
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'center',
            marginVertical: size.moderateScale(10),
            borderWidth: 1.5,
            marginHorizontal: size.moderateScale(25),
            borderColor: 'rgba(11, 146, 158, 1)',
            height: size.moderateScale(44),
            alignItems: 'center',
            borderRadius: 8,
          }}>
          <TouchableOpacity onPress={onpress1}>
            <View
              style={{
                backgroundColor: 'rgba(28, 154, 165, 0.05)',
                borderWidth: border == 1 ? 1 : 0,
                borderColor: 'rgba(11, 146, 158, 1)',
                width: size.moderateScale(140),
                borderRadius: 5,
                height: size.moderateScale(30),
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: size.moderateScale(5),
              }}>
              <Text
                style={{
                  fontSize: fontSize.extrasmall,
                  fontFamily: fonts.PoppinsMedium,
                  color: border == 1 ? color.rama : color.lightblack,
                }}>
                {text1}
              </Text>
            </View>
          </TouchableOpacity>
          <TouchableOpacity onPress={onpress2}>
            <View
              style={{
                backgroundColor: 'rgba(28, 154, 165, 0.05)',
                borderWidth: border == 1 ? 0 : 1,
                borderColor: 'rgba(11, 146, 158, 1)',
                width: size.moderateScale(140),
                borderRadius: 5,
                height: size.moderateScale(30),
                alignItems: 'center',
                justifyContent: 'center',
                marginHorizontal: size.moderateScale(5),
              }}>
              <Text
                style={{
                  fontSize: fontSize.extrasmall,
                  fontFamily: fonts.PoppinsMedium,
                  color: border == 0 ? color.rama : color.lightblack,
                }}>
                {text2}
              </Text>
            </View>
          </TouchableOpacity>
        </View>
      </View>
    );
  }
}
