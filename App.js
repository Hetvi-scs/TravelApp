import {View, Text} from 'react-native';
import React from 'react';
import {NavigationContainer} from '@react-navigation/native';
import Bottomtab from './app/navigation/bottomTabNavigation';
import MainStck from './app/navigation/mainStackNavigation';
export default function App() {
  return (
    <NavigationContainer>
      <MainStck />
    </NavigationContainer>
  );
}
