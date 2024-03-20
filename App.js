import {View, Text} from 'react-native';
import React from 'react';
import SplashScreen from './app/screens/SplashScreen';
import {color} from './app/theme';
import Customheader from './app/components/CustomHeader';
import Upcomingcard from './app/components/Upcomingcard';
import SelectPaymentMode from './app/screens/SelectPaymentMode.js';

export default function App() {
  return (
    <View>
    <SelectPaymentMode/>
    </View>
  )
}
