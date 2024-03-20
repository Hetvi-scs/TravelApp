import {View, Text} from 'react-native';
import React from 'react';
import {IcSmallcheck, color, size} from '../../theme';
import CustomeTabBar from '../../components/CustomTabbar';

export default function MyTrips() {
  return (
    <View style={{backgroundColor:'pink', flex:1, marginTop:size.moderateScale(40)}}>
      <CustomeTabBar type='three'/>
      
      <Text>MyTrips</Text>
    </View>
  );
}
