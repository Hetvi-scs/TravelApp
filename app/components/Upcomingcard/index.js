import {View, Text} from 'react-native';
import React from 'react';
import {
  IcEarthserach,
  IcGraymulticity,
  IcGrayrightlong,
  IcLongGrayArrow,
  IcRightBlueArrow,
  IcSearch,
  color,
  fontSize,
  fonts,
  size,
} from '../../theme';
import Sharegray from '../../theme/images/svg/Sharegray';

export default function Upcomingcard({
  date1,
  to,
  date2,
  month,
  city1,
  city2,
  vikram,
  days,
  showGrayArrow = true,
}) {
  return (
    <View
      style={{
        //   backgroundColor: 'pink',
        marginHorizontal: size.moderateScale(13),
        borderWidth: size.moderateScale(0.7),
        borderColor: color.lightgray,
        borderRadius: size.moderateScale(7),
        marginVertical: size.moderateScale(12),
      }}>
      <View>
        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'flex-start',
            marginTop: 10,
          }}>
          <Text
            style={{
              marginLeft: size.moderateScale(20),
              fontFamily: fonts.PoppinsSemiBold,
              color: color.black,
              fontSize: fontSize.extrasmall,
            }}>
            {date1}
          </Text>
          <Text
            style={{
              marginHorizontal: size.moderateScale(7),
              fontFamily: fonts.PoppinsSemiBold,
              color: color.black,
              fontSize: fontSize.extrasmall,
            }}>
            {to}
          </Text>
          <Text
            style={{
              marginHorizontal: size.moderateScale(7),
              fontFamily: fonts.PoppinsSemiBold,
              color: color.black,
              fontSize: fontSize.extrasmall,
            }}>
            {date2}
          </Text>
          <Text
            style={{
              marginHorizontal: size.moderateScale(6),
              marginHorizontal: size.moderateScale(7),
              fontFamily: fonts.PoppinsSemiBold,
              color: color.black,
              fontSize: fontSize.extrasmall,
            }}>
            {month}
          </Text>
        </View>
        <View
          style={{
            backgroundColor: color.lightgray,
            height: 0.4,

            marginBottom: 15,
          }}></View>
        <View style={{flexDirection: 'row'}}>
          <View style={{}}>
            <IcGraymulticity style={{marginLeft: size.moderateScale(18)}} />
          </View>
          <View style={{}}>
            <Text
              style={{
                marginHorizontal: size.moderateScale(8),
                fontFamily: fonts.PoppinsMedium,
                color: color.black,
                fontSize: fontSize.extrasmall,
              }}>
              {city1}
            </Text>
          </View>

        

          {showGrayArrow && (
            <View style={{}}>
              <IcGrayrightlong style={{marginTop: size.moderateScale(1.5)}} />
            </View>
          )}

         

          <View style={{flex:1}}>
            <Text
              style={{
                marginHorizontal: size.moderateScale(8),
                fontFamily: fonts.PoppinsMedium,
                color: color.black,
                fontSize: fontSize.extrasmall,
              }}>
              {city2}
            </Text>
          </View>
          <View style={{marginHorizontal:size.moderateScale(13)}}>
            <Text
              style={{
                fontFamily: fonts.PoppinsRegular,
                color: color.semiorange,
                fontSize: fontSize.extrasmall,
              }}>
              Modify trip
            </Text>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            justifyContent: 'space-between',
            marginHorizontal: 8,
            alignItems: 'center',
            // backgroundColor:'red'
          }}>
          <View>
            <Text
              style={{
                marginHorizontal: size.moderateScale(42),
                fontFamily: fonts.PoppinsRegular,
                fontSize: fontSize.extrasmall,
                color: color.lightgray,
              }}>
              {vikram}
            </Text>
            <Text
              style={{
                marginHorizontal: size.moderateScale(39),
                fontFamily: fonts.PoppinsRegular,
                fontSize: fontSize.extrasmall,
                color: color.lightgray,
                marginBottom: 10,
              }}>
              {' '}
              {days}
            </Text>
          </View>

          <Sharegray />
        </View>
      </View>
    </View>
  );
}
