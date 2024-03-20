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
import Profile from '../../screens/Profile';

export default function Bottomtab() {
  const Tab = createBottomTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{headerShown: false, tabBarActiveTintColor: color.orange}}>
      <Tab.Screen
        name="Home"
        component={Home}
        options={{
          tabBarIcon: ({focused}) => {
            return <View>{focused ? <IcOrangehome /> : <IcGrayhome />}</View>;
          },
        }}
      />
      <Tab.Screen
        name="Notification"
        component={Notification}
        options={{
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
        component={Profile}
        options={{
            tabBarLabel: 'Account',
          tabBarIcon: ({focused}) => {
            return (
              <View>
                {focused ? (
                  <IcOrangeaccount
                  //   style={{
                  //     height: 50,
                  //     width: 100,
                  //     backgroundColor: 'purple',
                  //   }}
                  />
                ) : (
                  <IcGrayaccount
                  //   style={{height: 50, width: 50, backgroundColor: 'gray'}}
                  />
                )}
              </View>
            );
          },
        }}
      />
    </Tab.Navigator>
  );
}
