import {View, Text, SafeAreaView} from 'react-native';
import React from 'react';
import Customheader from '../../components/CustomHeader';
import {IcBeach, IcHeaderBackArrow, color, fontSize, fonts} from '../../theme';

export default function Emergency() {
  return (
    <SafeAreaView style={{backgroundColor: 'yellow', flex: 1}}>
      <View style={{}}>
        <Customheader
          type="third"
          text3="Emergency"
          img={<IcHeaderBackArrow />}
        />

        <View style={{alignSelf: 'center'}}>
          <Text
            style={{
              fontSize: fontSize.large,
              textAlign: 'center',
              color: color.extralightblack,
              fontFamily: fonts.PoppinsSemiBold,
            }}>
            Emergency
          </Text>
          <Text
            style={{
              fontSize: fontSize.large,
              textAlign: 'center',
              color: color.extralightblack,
              fontFamily: fonts.PoppinsSemiBold,
            }}>
            help needed?
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
}
