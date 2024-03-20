import {View, Text} from 'react-native';
import React from 'react';
import Bottomtab from './app/navigation/bottomTabNavigation';
import { NavigationContainer } from '@react-navigation/native';
import Filter from './app/screens/Filter';
import { IcBlackstar } from './app/theme';

export default function App() {
  return (
  <View>

   
    <Filter>
    </Filter>
  </View>
  );
}
