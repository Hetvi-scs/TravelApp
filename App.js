import {View, Text} from 'react-native';
import React from 'react';
import SplashScreen from './app/screens/SplashScreen';
import {IcBank, color} from './app/theme';
import Customheader from './app/components/CustomHeader';
import Upcomingcard from './app/components/Upcomingcard';
import Profile from './app/screens/Profile';

import {NavigationContainer} from '@react-navigation/native';
import Bottomtab from './app/navigation/bottomTabNavigation';
import Filterdata from './app/screens/Filter';
import Filter from './app/screens/Filter';
import Filter2 from './app/screens/Fliter2';

export default function Home() {
  return (
    <Filter2/>
  );
}
