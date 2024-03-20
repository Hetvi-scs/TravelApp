import {View, Text} from 'react-native';
import React from 'react';

import Filter2 from './app/screens/Fliter2/index.js';
import { NavigationContainer } from '@react-navigation/native';
import MainStck from './app/navigation/mainStackNavigation/index.js';

export default function Home() {
  return (
   <NavigationContainer>
    <MainStck/>
   </NavigationContainer>
   
    
  );
}
