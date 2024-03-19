import {View, Text} from 'react-native';
import React from 'react';
import SplashScreen from './app/screens/SplashScreen';
import {color} from './app/theme';

export default function App() {
  return (
    <View style={{flex: 1, backgroundColor: color.white}}>
      <SplashScreen />
    </View>
  );
}
