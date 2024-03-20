import {View, Text} from 'react-native';
import React from 'react';
import {IcSmallcheck, color, fontSize, fonts, size} from '../../theme';
import CustomeTabBar from '../../components/CustomTabbar';
import Upcomingcard from '../../components/Upcomingcard';
import Whitedot from '../../theme/images/svg/Whitedot';

export default function MyTrips() {
  return (
    <View
      style={{
       // backgroundColor: 'pink',
        flex: 1,
        marginTop: size.moderateScale(60),
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
      <View
        style={{
         // backgroundColor: 'red',
          justifyContent: 'center',
          alignItems: 'center',
          height: size.moderateScale(90),
        }}>
        <Text
          style={{
            fontFamily: fonts.PoppinsRegular,
            color: color.lightgray,
            fontSize: fontSize.extrasmall,
          }}>
          Not able to find a booking?
        </Text>

        <Text
          style={{
            alignSelf: 'center',
            fontFamily: fonts.PoppinsMedium,
            color: color.rama,
            fontSize: fontSize.extrasmall,
          }}>
          ADD BOOKING
        </Text>
      </View>
    </View>
  );
}
