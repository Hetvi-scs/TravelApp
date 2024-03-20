import {View, Text} from 'react-native';
import React from 'react';
import {createStackNavigator} from '@react-navigation/stack';
import MultiCity from '../../screens/MultiCity';
import FlightBook from '../../screens/flightBooking';

export default function Multi() {
  const Stack = createStackNavigator();
  return (
    <Stack.Navigator initialRouteName="Bottomtab">
      <Stack.Screen
        name="MultiCity"
        component={MultiCity}
        options={{headerShown: false}}
      />
      <Stack.Screen
        name="FlightBook"
        component={FlightBook}
        options={{headerShown: false}}
      />
    </Stack.Navigator>
  );
}
