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
import * as styles from './styles';
export default function Home() {
  const arra = [
    {
      logo: <IcOrangeflight fill={color.orange} height={40} />,
      txt: 'Flight',
    },
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
      <View style={styles.view()}>
        <View style={styles.imgview()}></View>
        <Image source={images.homepage} style={styles.img()} />
        <View style={{width: size.deviceWidth}}>
          <CustomTextInput
            border={color.gray}
            placeholder={'Find Your Adventure '}
            imgl={<IcSearch />}
          />
        </View>
      </View>
      <View style={styles.scroll()}>
        <ScrollView>
          <View style={styles.ScrollView()}>
            {arra.map(item => (
              <View style={styles.home1()}>
                <HomeCard1 icon={item.logo} text={item.txt} />
              </View>
            ))}
          </View>
          <View style={styles.textview()}>
            <View style={styles.textview2()}>
              <View style={styles.textview3()}>
                <Text style={styles.txt()}>Personalized </Text>
                <Text style={styles.txt2()}>trips</Text>
              </View>
              <View style={styles.textview4()}>
                <Text style={styles.text3()}>View All{'  '}</Text>
                <IcViewall />
              </View>
            </View>
          </View>
          <View style={styles.home2()}>
            <ScrollView horizontal showsHorizontalScrollIndicator={false}>
              {arr.map(item => (
                <View style={styles.homecard()}>
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
          <View style={styles.textview()}>
            <View style={styles.textview2()}>
              <View style={styles.textview3()}>
                <Text style={styles.txt()}>Discover your </Text>
                <Text style={styles.txt2()}>Interest</Text>
              </View>
              <View style={styles.textview4()}>
                <Text style={styles.text3()}>View All{'  '}</Text>
                <IcViewall />
              </View>
            </View>
          </View>
          <View style={styles.lView()}>
            {arra1.map(item => (
              <View style={styles.home1()}>
                <HomeCard1 icon={item.logo} text={item.txt} />
              </View>
            ))}
          </View>
        </ScrollView>
      </View>
    </View>
  );
}
