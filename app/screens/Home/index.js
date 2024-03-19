import {View, Text, Image, StatusBar, ScrollView} from 'react-native';
import React from 'react';
import {
  IcBeach,
  IcBookCabSearch,
  IcFood,
  IcOrangebuses,
  IcOrangecabs,
  IcOrangeflight,
  IcOrangehome,
  IcOrangehotel,
  IcOrangetrains,
  IcSearch,
  IcTrending,
  IcViewall,
  color,
  fontSize,
  fonts,
  images,
  size,
} from '../../theme';
import CustomTextInput from '../../components/CustomTextInput';
import HomeCard1 from '../../components/HomeCard1';
import HomeCard2 from '../../components/HomeCard2';

export default function Home() {
  const arra = [
    {logo: <IcOrangeflight />, txt: 'Flight'},
    {logo: <IcOrangehotel />, txt: 'Hotels'},
    {logo: <IcOrangetrains />, txt: 'Trains'},
    {logo: <IcOrangebuses />, txt: 'Buses'},
    {logo: <IcOrangecabs />, txt: 'Cabs'},
    {logo: <IcOrangehome />, txt: 'Stays'},
  ];

  const arra1 = [
    {logo: <IcTrending />, txt: 'Trending'},
    {logo: <IcBeach />, txt: 'Beach'},
    {logo: <IcFood />, txt: 'Food'},
    {logo: <IcOrangebuses />, txt: 'Buses'},
    {logo: <IcOrangecabs />, txt: 'Cabs'},
    {logo: <IcOrangehome />, txt: 'Stays'},
  ];
  const arr = [
    {
      img: images.southindia,
      place: 'South india tour',
      type: 'full',
      price: 100,
      number: '5.0',
    },
    {
      img: images.rajasthan,
      place: 'Royal Rajasthan',
      type: undefined,
      price: 50,
      number: '4.5',
    },
    {
      img: images.southindia,
      place: 'South india tour',
      type: 'full',
      price: 100,
      number: '5.0',
    },
  ];
  return (
    <View>
      <StatusBar translucent backgroundColor={'transparent'}></StatusBar>
      <View
        style={{
          width: size.deviceWidth,
          height: size.moderateScale(170),
          borderBottomLeftRadius: size.moderateScale(48),
          borderBottomRightRadius: size.moderateScale(48),
          alignItems: 'center',
          justifyContent: 'center',
        }}>
        <Image
          source={images.homepage}
          style={{
            position: 'absolute',
            width: size.deviceWidth,
            height: size.moderateScale(200),
          }}
        />
        <View style={{width: size.deviceWidth}}>
          <CustomTextInput
            border={color.gray}
            placeholder={'Find Your Adventure '}
            imgl={<IcSearch />}
          />
        </View>
      </View>
      <View
        style={{
          marginTop: size.moderateScale(-10),
          width: size.deviceWidth,
          height: size.deviceHeight - size.moderateScale(184),
          backgroundColor: color.white,
          borderTopLeftRadius: size.moderateScale(16),
          borderTopRightRadius: size.moderateScale(16),
        }}>
        <ScrollView>
          <View
            style={{
              height: size.moderateScale(210),
              marginHorizontal: size.moderateScale(25),
              marginVertical: size.moderateScale(15),
              width: size.deviceWidth,
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}>
            {arra.map(item => (
              <View
                style={{
                  marginRight: size.moderateScale(18),
                  marginVertical: size.moderateScale(10),
                }}>
                <HomeCard1 icon={item.logo} text={item.txt} />
              </View>
            ))}
          </View>
          <View
            style={{
              height: size.moderateScale(40),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: size.moderateScale(25),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '79%',
                }}>
                <Text
                  style={{
                    fontFamily: fonts.PoppinsBold,
                    fontSize: fontSize.medium,
                    color: color.black,
                  }}>
                  Personalized{' '}
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.PoppinsBold,
                    fontSize: fontSize.medium,
                    color: color.rama,
                    textDecorationLine: 'underline',
                  }}>
                  trips
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '21%',
                }}>
                <Text
                  style={{
                    fontFamily: fonts.PoppinsBold,
                    fontSize: fontSize.small,
                    color: color.gray,
                  }}>
                  View All{'  '}
                </Text>
                <IcViewall />
              </View>
            </View>
          </View>
          <View
            style={{
              height: size.moderateScale(190),
              alignItems: 'center',
              flexDirection: 'row',
              marginHorizontal: size.moderateScale(25),
            }}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {arr.map(item => (
                <View style={{marginRight: size.moderateScale(25)}}>
                  <HomeCard2
                    number={item.number}
                    price={item.price}
                    src={item.img}
                    place={item.place}
                    type={item.type}
                  />
                </View>
              ))}
            </ScrollView>
          </View>
          <View
            style={{
              height: size.moderateScale(40),
              alignItems: 'center',
              justifyContent: 'center',
            }}>
            <View
              style={{
                flexDirection: 'row',
                alignItems: 'center',
                marginHorizontal: size.moderateScale(25),
              }}>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '79%',
                }}>
                <Text
                  style={{
                    fontFamily: fonts.PoppinsBold,
                    fontSize: fontSize.medium,
                    color: color.black,
                  }}>
                  Discover your{' '}
                </Text>
                <Text
                  style={{
                    fontFamily: fonts.PoppinsBold,
                    fontSize: fontSize.medium,
                    color: color.rama,
                    textDecorationLine: 'underline',
                  }}>
                  Interest
                </Text>
              </View>
              <View
                style={{
                  flexDirection: 'row',
                  alignItems: 'center',
                  width: '21%',
                }}>
                <Text
                  style={{
                    fontFamily: fonts.PoppinsBold,
                    fontSize: fontSize.small,
                    color: color.gray,
                  }}>
                  View All{'  '}
                </Text>
                <IcViewall />
              </View>
            </View>
          </View>
          <View
            style={{
              height: size.moderateScale(210),
              marginHorizontal: size.moderateScale(25),
              width: size.deviceWidth,
              flexWrap: 'wrap',
              flexDirection: 'row',
            }}>
            {arra1.map(item => (
              <View
                style={{
                  marginRight: size.moderateScale(18),
                  marginVertical: size.moderateScale(10),
                }}>
                <HomeCard1 icon={item.logo} text={item.txt} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
