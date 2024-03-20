import {View, Text, StatusBar, TouchableOpacity} from 'react-native';
import React, {useEffect, useState} from 'react';
import {createMaterialTopTabNavigator} from '@react-navigation/material-top-tabs';
import CustomeTabBar from '../../components/CustomTabbar';
import {color, fontSize, fonts, size} from '../../theme';
import {useNavigation} from '@react-navigation/native';
import NewDelhi from '../../screens/NewDelhi';
import Goa from '../../screens/Goa';
import {ScrollView} from 'react-native-gesture-handler';
import CustomButton from '../../components/CustomButton';
import {sort} from '../../components/CustomButton/styles';
import * as styles from './styles';

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
  const [it, setIt] = useState('Sat, jun 10');
  const navigation = useNavigation();

  const arr = [
    {
      text: 'Fri, jun 9',
    },
    {
      text: 'Sat, jun 10',
    },
    {
      text: 'Sun, jun 11',
    },
    {
      text: 'Mon,jun 12',
    },
    {
      text: 'Tue, jun 13',
    },
  ];

  const setitem = item => {
    setIt(item);
  };
  return (
    <View style={styles.mainView()}>
      <View style={styles.view1()}></View>
      {state.index == 0 ? (
        <CustomeTabBar
          onpress1={() => {
            navigation.navigate('NewDelhi');
          }}
          text1={'New Delhi - Goa'}
          text2={'Goa - Mumbai'}
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
          text1={'New Delhi - Goa'}
          text2={'Goa - Mumbai'}
          onpress2={() => {
            navigation.navigate('Goa');
          }}
          border={0}
        />
      )}
      <View style={styles.view2()}>
        <View style={styles.jun()}>
          <Text style={styles.txt()}>JUN</Text>
        </View>
        <ScrollView horizontal showsHorizontalScrollIndicator={false}>
          {arr.map(item => (
            <TouchableOpacity
              onPress={() => {
                setitem(item.text);
              }}>
              {it == item.text ? (
                <View style={styles.scroll()}>
                  <Text style={styles.scrolltxt2()}>{item.text}</Text>
                </View>
              ) : (
                <View style={styles.scroll2()}>
                  <Text style={styles.scrolltxt()}>{item.text}</Text>
                </View>
              )}
            </TouchableOpacity>
          ))}
        </ScrollView>
      </View>
      <View style={styles.btn()}>
        <View style={styles.btnview()}>
          <CustomButton type={'sort'} text={'Sort'} onPress={() => {}} />
        </View>
        <View style={styles.btnview2()}>
          <CustomButton type={'sort'} text={'Filter'} onPress={() => {}} />
        </View>
      </View>
    </View>
  );
}
