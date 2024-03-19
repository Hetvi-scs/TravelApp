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

export default function CustomeHotel({
  type,
  img1,
  img2,
  img3,
  img4,
  img5,
  rtxt,
  price,
  
  count,
  location,
  distance,
  brftxt,
  btntxt,
}) {
  return (
    <View>
      <View
        style={{
          height: size.moderateScale(340),
          marginHorizontal: size.moderateScale(25),
          borderRadius: 8,
          backgroundColor: color.white,
        }}>
        <View
          style={{
            flexDirection: 'row',
            marginVertical: size.moderateScale(5),
            marginHorizontal: size.moderateScale(4),
          }}>
          <Image
            source={img1}
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
              source={img2}
              style={{
                width: size.moderateScale(96),
                height: size.moderateScale(62),
                borderRadius: 6,
              }}></Image>
            <Image
              source={img3}
              style={{
                width: size.moderateScale(96),
                height: size.moderateScale(62),
                borderRadius: 6,

                marginVertical: 11,
              }}></Image>
          </View>
          <View style={{flexDirection: 'column', marginHorizontal: 1}}>
            <Image
              source={img4}
              style={{
                width: size.moderateScale(96),
                height: size.moderateScale(62),
                borderRadius: 6,
              }}></Image>
            <View
              style={{
                justifyContent: 'center',
                alignItems: 'center',

                borderWidth: 1.5,
                borderRadius: 6,
                width: size.moderateScale(99),
                height: size.moderateScale(64),
                marginVertical: 10,
              }}>
              <Image
                source={img5}
                style={{
                  width: size.moderateScale(98),
                  height: size.moderateScale(62),
                  borderRadius: 6,
                  resizeMode: 'cover',
                }}></Image>
              <View
                style={{
                  position: 'absolute',
                  width: size.moderateScale(96),
                  height: size.moderateScale(64),
                  backgroundColor: 'rgba(0, 0, 0, 0.2)',
                  justifyContent: 'center',
                  alignItems: 'center',
                  borderRadius: 6,
                  elevation: 100,
                }}>
                <Text
                  style={{
                    fontFamily: fonts.PoppinsRegular,
                    color: color.white,
                    fontSize: fontSize.large,
                  }}>
                  {count}
                </Text>
              </View>
            </View>
          </View>
        </View>

        <View
          style={{
            flexDirection: 'row',
            marginHorizontal: size.moderateScale(5),
          
          }}>
          <CustomReview2 type={type}></CustomReview2>
          <View
            style={{
              height: 4,
              width: 4,
              backgroundColor: color.gray,
              marginVertical: 7,
              marginHorizontal: 7,
              borderRadius: 8,
              flexDirection:'row'
            }}></View>
          <Text
            style={{
              fontSize: fontSize.extrasmall,
              fontFamily: fonts.PoppinsLight,
            }}>
            Excellent
          </Text>
          <Text
            style={{
              fontSize: fontSize.extrasmall,
              fontFamily: fonts.PoppinsLight,
              marginHorizontal:size.moderateScale(5)
            }}>
                {rtxt} 
          </Text>
          <Text
            style={{
              fontSize: fontSize.extrasmall,
              fontFamily: fonts.PoppinsLight,
             
            }}>
                reviews 
          </Text>
          <View style={{flexDirection: 'column'}}>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: size.moderateScale(58),
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
                {price}
              </Text>
            </View>
            <View style={{marginHorizontal: size.moderateScale(60)}}>
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
              {location}
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
              {distance}
            </Text>
          </View>
          <View style={{marginHorizontal: size.moderateScale(8)}}>
            <Text
              style={{
                color: color.lightblue,
                fontFamily: fonts.PoppinsBold,
                fontSize: fontSize.extrasmall,
              }}>
              {brftxt}
            </Text>
          </View>
          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              width: size.moderateScale(340),
             
            }}>
            <View
              style={{
                width: size.moderateScale(81),
                marginVertical: size.moderateScale(10),
                marginHorizontal: size.moderateScale(5),
              }}>
              <CustomButton type={'booknow'} text={btntxt}></CustomButton>
            </View>
            <View
              style={{
                flexDirection: 'row',
                marginHorizontal: size.moderateScale(129.7),
              }}>
              <IcTrustedPart width={15} />
              <Text
                style={{
                  fontSize: size.moderateScale(10),
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
