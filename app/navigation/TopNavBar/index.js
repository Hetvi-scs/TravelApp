import {View, Text, StatusBar} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import PopularDestination from '../../screens/PopularDestination';
import CreateYourOwn from '../../screens/CreateYourOwn';
import CustomeTabBar from '../../components/CustomTabbar';
import {color, size} from '../../theme';
import {useNavigation} from '@react-navigation/native';

export default function TopNavBar() {
  const Tab = createMaterialTopTabNavigator();

  return (
    <Tab.Navigator
      screenOptions={{
        headerShown: false,
        swipeEnabled: false,
      }}
      tabBar={MyTabBar}>
      <Tab.Screen name="PopularDestination" component={PopularDestination} />
      <Tab.Screen name="CreateYourOwn" component={CreateYourOwn} />
    </Tab.Navigator>
  );
}

function MyTabBar({state}) {
  const [border, setBorder] = useState(1);
  const navigation = useNavigation();
  return (
    <View style={{backgroundColor: color.white}}>
      <View style={{marginTop: size.moderateScale(40)}}></View>
      {state.index == 0 ? (
        <CustomeTabBar
          onpress1={() => {
            navigation.navigate('PopularDestination');
          }}
          text1={'Popular Destination'}
          text2={'Create your own'}
          onpress2={() => {
            navigation.navigate('CreateYourOwn');
          }}
          border={1}
        />
      ) : (
        <CustomeTabBar
          onpress1={() => {
            navigation.navigate('PopularDestination');
          }}
          text1={'Popular Destination'}
          text2={'Create your own'}
          onpress2={() => {
            navigation.navigate('CreateYourOwn');
          }}
          border={0}
        />
      )}
    </View>
  );
}
