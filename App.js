import {View, Text} from 'react-native';
import React from 'react';
import SplashScreen from './app/screens/SplashScreen';
import {color} from './app/theme';
import Customheader from './app/components/CustomHeader';
import Upcomingcard from './app/components/Upcomingcard';

export default function Home() {
  return (
    <View>
     <Upcomingcard/>
    </View>
  );
}
