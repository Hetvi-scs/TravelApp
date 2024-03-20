import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Bottomtab from '../bottomTabNavigation';
import FlightBook from '../../screens/flightBooking';
import SplashScreen from '../../screens/SplashScreen';

export default function MainStck() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="SplashScreen">
       <Stack.Screen
        name="SplashScreen"
        component={SplashScreen}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="Bottomtab"
        component={Bottomtab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
