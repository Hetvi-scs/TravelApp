import {View, Text} from 'react-native';
import React from 'react';
import FlightBooking from '../../components/FlightBooking';
import {images} from '../../theme';

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
      place3: 'Per traveller',
      locktext: 'Lock this price',
    },
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
      place3: 'Per traveller',
      locktext: 'Lock this price',
    },
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
      place3: 'Per traveller',
      locktext: 'Lock this price',
    },
  ];

  return (
    <View style={{flex: 1, backgroundColor: 'white'}}>
      <View>
        <FlightBooking
          type={'Nonstop'}
          img1={images.vistara}
          imgtxt={'Vistara'}
          time={'19:00'}
          place={'New Delhi'}
          timetxt={'2h 35m'}
          timetxt2={'21:35'}
          place2={'Goa'}
          price={'112.5'}
          place3={'Per traveller'}
          locktext={'Lock this price'}
        />
      </View>
    </View>
  );
}
