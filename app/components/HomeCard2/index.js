import {View, Text, Image, TouchableOpacity} from 'react-native';
import React, {useState} from 'react';
import {IcWhiteheart, color, fontSize, fonts, images, size} from '../../theme';
import CustomReview from '../CustomReview';

export default function HomeCard2({price, src, type, number, place}) {
  const [isHovered, setIsHovered] = useState(false);

  const Color = () => {
    setIsHovered(prevState => !prevState);
  };
  const svgColor = isHovered ? 'red' : 'white';
  return (
    <View>
      <View style={{marginHorizontal: 25}}>
        <Image
          source={src}
          style={{
            width: size.moderateScale(163),
            borderRadius: 8,
            height: size.moderateScale(178),
          }}></Image>
        <View
          style={{
            position: 'absolute',
            marginHorizontal: size.moderateScale(5),
            marginVertical: 5,
          }}>
          <TouchableOpacity onPress={Color}>
            <IcWhiteheart fill={svgColor} />
          </TouchableOpacity>
        </View>
        <View
          style={{
            width: size.moderateScale(163),
            height: size.moderateScale(60),
            backgroundColor: color.white,
            position: 'absolute',
            marginVertical: size.moderateScale(120),
            borderBottomLeftRadius: 8,
            borderBottomRightRadius: 8,
            justifyContent: 'center',
          }}>
          <View style={{marginHorizontal: 10}}>
            <View
              style={{flexDirection: 'row', height: size.moderateScale(18)}}>
              <CustomReview type={type} />
              <Text
                style={{
                  fontSize: fontSize.extrasmall,
                  fontFamily: fonts.PoppinsBold,
                  color: color.gray,
                }}>
                {number}
              </Text>
            </View>
            <View style={{width: 160, flexDirection: 'row'}}>
              <View style={{width: size.moderateScale(110)}}>
                <Text
                  style={{
                    fontFamily: fonts.PoppinsMedium,
                    fontSize: fontSize.extrasmall,
                  }}>
                  {place}
                </Text>
              </View>
              <Text
                style={{
                  color: color.lightblack,
                  fontFamily: fonts.PoppinsSemiBold,
                  fontSize: fontSize.extrasmall,
                }}>
                $
              </Text>
              <Text
                style={{
                  color: color.lightblack,
                  fontFamily: fonts.PoppinsSemiBold,
                  fontSize: fontSize.extrasmall,
                }}>
                {price}
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
