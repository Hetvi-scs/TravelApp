import {View, Text} from 'react-native';
import React from 'react';
import SplashScreen from './app/screens/SplashScreen';
import {IcBank, color, images} from './app/theme';
import Customheader from './app/components/CustomHeader';
import Upcomingcard from './app/components/Upcomingcard';
import Profile from './app/screens/Profile';

import {NavigationContainer} from '@react-navigation/native';
import Bottomtab from './app/navigation/bottomTabNavigation';
import SelectPaymentMode from './app/screens/SelectPaymentMode.js';
import AddCreditCard from './app/screens/AddCreditCard';
import FlightBooking from './app/components/FlightBooking/index.js';

export default function Home() {
  return (
    <NavigationContainer>
      <Bottomtab />
    </NavigationContainer> 
   
    
  );
}
