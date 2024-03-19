import {View, Text} from 'react-native';
import React from 'react';
import Upcomingcard from './app/components/Upcomingcard';
import Customheader from './app/components/CustomHeader';
import { IcBluePlane, IcGrayrightlong, IcLongGrayArrow, IcRightsideArrow, IcWhitetower } from './app/theme';
import Rightwhitearrow from './app/theme/images/svg/Rightwhitearrow';

export default function App() {
  return (
    <View>
      <Customheader type='second' img={<IcBluePlane/>} text='Select paymnt method'/>

     
    </View>
  );
}
