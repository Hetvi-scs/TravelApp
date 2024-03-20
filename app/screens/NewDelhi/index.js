import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import FlightBooking from '../../components/FlightBooking';
import {color, images, size} from '../../theme';
import * as styles from './styles';

export default function NewDelhi() {
  const arr = [
    {
      type: 'Nonstop',
      img1: images.vistara,
      imgtxt: 'Vistara',
      time: '19:00',
      place: 'New Delhi',
      timetxt: '2h 35m',
      timetxt2: '21:35',
      place2: 'Goa',
      price: '112.5',
      clr: undefined,
    },
    {
      type: '1 stop',
      img1: images.indigo,
      imgtxt: 'IndiGo',
      time: '14:20',
      place: 'New Delhi',
      timetxt: '15h 35m',
      timetxt2: '08:20',
      place2: 'Goa',
      price: '100.5',
      clr: color.orange,
    },
    {
      type: 'Nonstop',
      img1: images.spicejet,
      imgtxt: 'SpiceJet',
      time: '19:00',
      place: 'New Delhi',
      timetxt: '2h 35m',
      timetxt2: '21:35',
      place2: 'Goa',
      price: '112.5',
      clr: undefined,
    },
  ];

  return (
    <View style={styles.mainView()}>
      <ScrollView>
        {arr.map(item => (
          <View style={styles.mar()}>
            <FlightBooking
              type={item.type}
              img1={item.img1}
              imgtxt={item.imgtxt}
              time={item.time}
              place={item.place}
              timetxt={item.timetxt}
              timetxt2={item.timetxt2}
              place2={item.place2}
              price={item.price}
              clr={item.clr}
            />
          </View>
        ))}
      </ScrollView>
    </View>
  );
}
