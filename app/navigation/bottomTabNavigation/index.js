import {View, Text} from 'react-native';
import React from 'react';
import {createBottomTabNavigator} from '@react-navigation/bottom-tabs';
import Home from '../../screens/Home';
import Notification from '../../screens/Notification';
import MyTrips from '../../screens/MyTrips';
import MultiCity from '../../screens/MultiCity';
import Account from '../../screens/Account';
import {
  IcGrayaccount,
  IcGrayhome,
  IcGraymulticity,
  IcGraymytrips,
  IcGraynotification,
  IcOrangeaccount,
  IcOrangehome,
  IcOrangemulticity,
  IcOrangesuitcase,
  color,
} from '../../theme';

export default function Bottomtab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        tabBarActiveTintColor: color.orange,
        tabBarStyle: {height: 60},
      }}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarLabelStyle: {paddingBottom: 10},
          tabBarIcon: ({focused}) => {
            return <View>{focused ? <IcOrangehome /> : <IcGrayhome />}</View>;
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
          tabBarLabelStyle: {paddingBottom: 10},
          tabBarLabel: 'Notifications',
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? <IcGraynotification /> : <IcGraynotification />}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="My Trips"
        component={MyTrips}
        options={{
          tabBarLabelStyle: {paddingBottom: 10},
          tabBarLabel: 'My Trips',
          tabBarIcon: ({focused}) => {
            return (
              <View>{focused ? <IcOrangesuitcase /> : <IcGraymytrips />}</View>
            );
          },
        }}
      />
      <Tab.Screen
        name="MultiCity"
        component={MultiCity}
        options={{
          tabBarLabelStyle: {paddingBottom: 10},
          tabBarLabel: 'Multi-city',
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? <IcOrangemulticity /> : <IcGraymulticity />}
              </View>
            );
          },
        }}
      />
      <Tab.Screen
        name="Account"
        component={Account}
        options={{
          tabBarLabelStyle: {paddingBottom: 10},
          tabBarLabel: 'Account',
          tabBarIcon: ({focused}) => {
            return (
              <View>{focused ? <IcOrangeaccount /> : <IcGrayaccount />}</View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
