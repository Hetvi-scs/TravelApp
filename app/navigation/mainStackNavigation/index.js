import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import Bottomtab from '../bottomTabNavigation';
import FlightBook from '../../screens/flightBooking';

export default function MainStck() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Bottomtab">
      <Stack.Screen
        name="Bottomtab"
        component={Bottomtab}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
