import {View, Text} from 'react-native';
import React from 'react';
import SplashScreen from './app/screens/SplashScreen';
import {IcBank, IcBlackstar, IcBluePlane, color} from './app/theme';
import Customheader from './app/components/CustomHeader';
import Upcomingcard from './app/components/Upcomingcard';
import Profile from './app/screens/Profile';

import {NavigationContainer} from '@react-navigation/native';
import Bottomtab from './app/navigation/bottomTabNavigation';
import Emergency from './app/screens/Emergency';

export default function Home() {
  return (
    <NavigationContainer>
      <Bottomtab />
    </NavigationContainer>
   
   
  );
}
