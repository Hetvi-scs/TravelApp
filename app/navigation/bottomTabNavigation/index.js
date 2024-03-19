import { View, Text } from 'react-native'
import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Notification from '../../screens/Notification';
import MyTrips from '../../screens/MyTrips';
import MultiCity from '../../screens/MultiCity';
import Account from '../../screens/Account';

export default function Bottomtab() {
    
const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator screenOptions={{headerShown:false}} >
    <Tab.Screen name="Home" component={Home}  />
    <Tab.Screen name="Notification" component={Notification} />
    <Tab.Screen name="MyTrips" component={MyTrips} />
    <Tab.Screen name="MultiCity" component={MultiCity} />
    <Tab.Screen name="Account" component={Account} />
    
  </Tab.Navigator>
  )
}