import {View, Text, Image, TouchableOpacity} from 'react-native';
import React from 'react';
import {

  IcLocation,
  IcTrustedPart,
  IcWhiteheart,
  color,
  fontSize,
  fonts,
  images,
  size,
} from '../../theme';
import CustomReview2 from '../CustomeReview2';
import CustomButton from '../CustomButton';


export default function CustomeHotel({type}) {
  return (
    <View>
      <View
        style={{
          height: size.moderateScale(320),
          marginHorizontal: size.moderateScale(25),
          borderRadius: 8,
          backgroundColor: color.white,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: size.moderateScale(5),
            marginHorizontal: size.moderateScale(1),
          }}>
          <Image
            source={images.palace}
            style={{
              height: size.moderateScale(135),
              width: size.moderateScale(105),
              borderRadius: 6,
            }}></Image>
          <View
            style={{
              position: 'absolute',
              marginVertical: size.moderateScale(8),
              marginHorizontal: size.moderateScale(5),
            }}>
            <TouchableOpacity>
              <IcWhiteheart></IcWhiteheart>
            </TouchableOpacity>
          </View>
          <View style={{flexDirection: 'column', marginHorizontal: 6}}>
            <Image
              source={images.pool}
              style={{
                width: 106,
                height: 66,
                borderRadius: 6,
              }}></Image>
            <Image
              source={images.dinner}
              style={{
                width: 106,
                height: 66,
                borderRadius: 6,

                marginVertical: 11,
              }}></Image>
          </View>
          <View style={{flexDirection: 'column', marginHorizontal: 1}}>
            <Image
              source={images.lobby}
              style={{
                width: 106,
                height: 66,
                borderRadius: 6,
              }}></Image>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                borderWidth: 1,
                borderRadius: 6,
                width: 108,
                height: 68,
                marginVertical: 10,
              }}>
              <Image
                source={images.beach}
                style={{
                  width: 106,
                  height: 66,
                  borderRadius: 6,
                }}></Image>
              <View
                style={{
                  position: 'absolute',
                  shadowColor: color.black,
                  elevation: 100,
                }}>
                <Text
                  style={{
                    fontFamily: fonts.PoppinsRegular,
                    color: color.white,
                    fontSize: fontSize.large,
                  }}>
                  +38
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'row'}}>
          <CustomReview2 type={type}></CustomReview2>
          <View
            style={{
              height: 4,
              width: 4,
              backgroundColor: color.gray,
              marginVertical: 7,
              marginHorizontal: 5,
              borderRadius: 8,
            }}></View>
          <Text
            style={{
              fontSize: fontSize.extrasmall,
              fontFamily: fonts.PoppinsLight,
            }}>
            Excellent 200 reviews
          </Text>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: size.moderateScale(65),
              }}>
              <Text
                style={{
                  fontSize: fontSize.medium,
                  color: color.black,
                  fontFamily: fonts.PoppinsBold,
                }}>
                $
              </Text>
              <Text
                style={{
                  fontSize: fontSize.medium,
                  color: color.black,
                  fontFamily: fonts.PoppinsBold,
                }}>
                174.7
              </Text>
            </View>
            <View style={{marginHorizontal: size.moderateScale(67)}}>
              <Text
                style={{
                  fontSize: size.moderateScale(10),
                  fontFamily: fonts.PoppinsLight,
                  color: color.lightgray,
                }}>
                Per Night
              </Text>
            </View>
          </View>
        </View>

        <View style={{flexDirection: 'column', marginVertical: 10}}>
          <View
            style={{
              marginHorizontal: size.moderateScale(5),

              flexDirection: 'row',
              marginVertical: size.moderateScale(-10),
            }}>
            <IcLocation width={15} />
            <Text
              style={{
                fontSize: fontSize.small,
                fontFamily: fonts.PoppinsBold,
                color: color.black,
                marginVertical: size.moderateScale(-5),
              }}>
              The Leela palace - New Delhi
            </Text>
          </View>
          <View
            style={{
              width: size.moderateScale(220),
              marginHorizontal: size.moderateScale(8),
            }}>
            <Text
              style={{
                fontSize: fontSize.extrasmall,
                color: color.gray,
                fontFamily: fonts.PoppinsLight,
              }}>
              Chanakyapuri | 8.6 km from T1 Delhi Airport (IGI Airport)
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              // width: size.moderateScale(340),
            }}>
            <View
              style={{
                width: size.moderateScale(81),
                marginVertical: size.moderateScale(10),
                marginHorizontal: size.moderateScale(1),
              }}>
              <CustomButton type={'continue'} text={'Book Now'}></CustomButton>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: size.moderateScale(123),
              }}>
              <IcTrustedPart width={35} />

              
              <Text
                style={{
                  fontSize: size.moderateScale(9),
                  fontFamily: fonts.PoppinsSemiBold,
                }}>
                Trusted Partner
              </Text>
            </View>
          </View>
        </View>
      </View>
    </View>
  );
}
