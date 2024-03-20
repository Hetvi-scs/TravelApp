import {View, Text} from 'react-native';
import React from 'react';
import {IcHeaderBackArrow, color, size} from '../../theme';
import Customheader from '../../components/CustomHeader';
import FlightBookTop from '../../navigation/FlightBookingTop';
import {useNavigation} from '@react-navigation/native';

export default function FlightBook() {
  const navigation = useNavigation();
  return (
    <>
      <View style={{backgroundColor: color.white}}>
        <View style={{marginTop: size.moderateScale(10)}}></View>
        <View>
          <Customheader
            type={'first'}
            img={<IcHeaderBackArrow />}
            text={'Flight booking'}
            onPress={() => {
              navigation.goBack();
            }}
          />
        </View>
      </View>
      <FlightBookTop />
    </>
  );
}
