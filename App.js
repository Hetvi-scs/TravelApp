import {View, Text} from 'react-native';
import React from 'react';
import Bottomtab from './app/navigation/bottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';

export default function Home() {
  return (
   <NavigationContainer>
      <Bottomtab/>
      </NavigationContainer>
  );
}
