import {View, Text} from 'react-native';
import React from 'react';
import {IcHeaderBackArrow, size} from '../../theme';
import Customheader from '../../components/CustomHeader';
import FlightBookTop from '../../navigation/FlightBookingTop';

export default function FlightBook() {
  return (
    <>
      <View>
        <View style={{marginTop: size.moderateScale(10)}}></View>
        <View>
          <Customheader
            type={'second'}
            img={<IcHeaderBackArrow />}
            text={'Flight booking'}
          />
        </View>
      </View>
      <FlightBookTop />
    </>
  );
}
