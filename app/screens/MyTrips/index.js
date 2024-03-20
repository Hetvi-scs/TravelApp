import {View, Text} from 'react-native';
import React from 'react';
import {IcSmallcheck, color, size} from '../../theme';
import CustomeTabBar from '../../components/CustomTabbar';
import Upcomingcard from '../../components/Upcomingcard';

export default function MyTrips() {
  return (
    <View
      style={{
        backgroundColor: 'pink',
        flex: 1,
        marginTop: size.moderateScale(40),
      }}>
      <CustomeTabBar type="three" />
      <View
        style={{flexDirection: 'column', marginTop: size.moderateScale(15)}}>
        <View>
          <Upcomingcard
            date1={'15'}
            to={'to'}
            date2={'17'}
            month={'July'}
            city1={'Delhi'}
            city2={'U.P'}
            vikram={'Vikram + 2'}
            days={'2 days trip'}
          />
        </View>
        <View>
          <Upcomingcard
            date1={'20'}
            to={'to'}
            date2={'25'}
            month={'Aug'}
            city1={'Manali'}
            city2={'Kasol'}
            vikram={'Vikram + 7'}
            days={'5 days trip'}
          />
        </View>
        <View>
          <Upcomingcard
            date1={'20'}
            to={'to'}
            date2={'27'}
            month={'Dec'}
            city1={'South India tour'}
           
            vikram={'Vikram + 5'}
            days={'7 days trip'}
            showGrayArrow={false}
          />
        </View>
      </View>
    </View>
  );
}
