import {View, Text, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomeTabBar from '../../components/CustomTabbar';
import {color, size} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import NewDelhi from '../../screens/NewDelhi';
import Goa from '../../screens/Goa';

export default function FlightBookTop() {
  const Tab = createMaterialTopTabNavigator();
  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
      }}
      tabBar={MyTabBar}>
      <Tab.Screen name="NewDelhi" component={NewDelhi} />
      <Tab.Screen name="Goa" component={Goa} />
    </Tab.Navigator>
  );
}

function MyTabBar({state}) {
  const [border, setBorder] = useState(1);
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: color.white}}>
      <View style={{marginTop: size.moderateScale(20)}}></View>
      {state.index == 0 ? (
        <CustomeTabBar
          onpress1={() => {
            navigation.navigate('NewDelhi');
          }}
          onpress2={() => {
            navigation.navigate('Goa');
          }}
          border={1}
        />
      ) : (
        <CustomeTabBar
          onpress1={() => {
            navigation.navigate('NewDelhi');
          }}
          onpress2={() => {
            navigation.navigate('Goa');
          }}
          border={0}
        />
      )}
    </View>
  );
}
