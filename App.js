import {View, Text} from 'react-native';
import React from 'react';
import SplashScreen from './app/screens/SplashScreen';
import {color} from './app/theme';
import {NavigationContainer} from '@react-navigation/native';
import Bottomtab from './app/navigation/bottomTabNavigation';

export default function Home() {
  return (
    <NavigationContainer>
      <Bottomtab />
    </NavigationContainer>
  );
}
