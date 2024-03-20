import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {IcSearch, color, images, size} from '../../theme';
import CustomTextInput from '../../components/CustomTextInput';
import PopularDesCrad from '../../components/PopularDesCard';
import * as styles from './styles';

export default function PopularDestination() {
  const arr = [
    {
      img1: images.delhitemple,
      img2: images.building,
      img3: images.tajmahal,
      img4: images.people,
      img5: images.memorial,
      days: 2,
      price: '40.70',
      type: 'full',
      rtxt: 200,
      btntxt: 'Book Now',
      count: '+40',
      location: 'Delhi-UP Tour',
    },
    {
      img1: images.lake,
      img2: images.minitaj,
      img3: images.drum,
      img4: images.minakshi,
      img5: images.sky,
      days: 2,
      price: '40.70',
      type: 'full',
      rtxt: 200,
      btntxt: 'Book Now',
      count: '+38',
      location: 'Delhi-UP Tour',
    },
  ];
  return (
    <View style={styles.mainview1()}>
      <View style={styles.mainview()}>
        <CustomTextInput
          border={color.gray}
          placeholder={'Find Your Adventure '}
          imgl={<IcSearch />}
        />
      </View>
      <ScrollView style={styles.scroll()}>
        {arr.map(item => (
          <View style={styles.marg()}>
            <PopularDesCrad
              img1={item.img1}
              img2={item.img2}
              img3={item.img3}
              img4={item.img4}
              img5={item.img5}
              days={item.days}
              price={item.price}
              type={item.type}
              rtxt={item.rtxt}
              btntxt={item.btntxt}
              count={item.count}
              location={item.location}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
