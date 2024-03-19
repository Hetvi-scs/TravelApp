import {View, Text, Image} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {
  IcGrayClock,
  IcLongRightBlueArrow,
  IcRightBlueArrow,
  color,
  fontSize,
  fonts,
  images,
  size,
  flight1,
  flight2,
  duration,
  flightname,
  amount,
  img1,
  time1,
  duration2,
  time2,
  city1,
  city2,
  airport1,
  airport2,
  date1,
  date2
} from '../../theme';

export default function FlightDetails() {
  return (
    <View>
      <View style={styles.mainview()}>
        <View style={styles.arrowview()}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              marginTop: 10,
            }}>
            <Text style={{color: color.rama, fontFamily: fonts.PoppinsMedium}}>
              {flight1}
            </Text>
            <IcLongRightBlueArrow style={{marginHorizontal: 15}} />
            <Text style={{color: color.rama, fontFamily: fonts.PoppinsMedium}}>
              {flight2}
            </Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>{duration}</Text>
          </View>
        </View>

        <View style={styles.vistaraview()}>
          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
            }}>
            <Image
              source={img1}
              style={{width: 24, height: 24, borderRadius: 5}}
            />
            <Text style={styles.vistaratxt()}> {flightname}</Text>
          </View>

          <View style={{flexDirection: 'row'}}>
            <View style={{justifyContent: 'center', alignItems: 'center'}}>
              <Text
                style={{
                  fontFamily: fonts.PoppinsLight,
                  fontFamily: fonts.PoppinsSemiBold,
                  color: color.lightblack,
                  fontSize: fontSize.extrasmall,
                }}>
               {amount}
              </Text>
            </View>
          </View>
        </View>
        <View style={styles.txtsviews()}>
          <View style={styles.view19hrs()}>
            <Text style={styles.txt19()}>{time1}</Text>
            <Text style={styles.hrs2()}>{duration2}</Text>
            <Text style={styles.txt21()}>{time2}</Text>
          </View>

          <View
            style={{
              flexDirection: 'row',
              justifyContent: 'space-between',
              marginTop: 4,
            }}>
            <Text
              style={{
                fontFamily: fonts.PoppinsMedium,
                color: color.extralightblack,
              }}>
              {city1}
            </Text>
            <View style={{}}>
              <View
                style={{
                  borderWidth: 1,
                  borderColor: color.lightgray,
                  width: size.moderateScale(20),
                  height: size.moderateScale(21),
                  borderRadius: 15,
                }}>
                <IcGrayClock
                  style={{
                    marginTop: size.moderateScale(2.4),
                    marginLeft: size.moderateScale(2.4),
                  }}
                />
              </View>
            </View>
            <Text
              style={{
                fontFamily: fonts.PoppinsMedium,
                color: color.extralightblack,
              }}>
              {city2}
            </Text>
          </View>

          <View style={{justifyContent: 'space-between', flexDirection: 'row'}}>
            <Text style={{fontFamily: fonts.PoppinsRegular, color: color.gray}}>
              {airport1}
            </Text>
            <Text style={{fontFamily: fonts.PoppinsRegular, color: color.gray}}>
            {airport2}
            </Text>
          </View>
          <View style={{flexDirection: 'row', justifyContent: 'space-between'}}>
            <Text style={{fontFamily: fonts.PoppinsRegular, color: color.gray}}>
              {date1}
            </Text>
            <Text style={{fontFamily: fonts.PoppinsRegular, color: color.gray}}>
            {date2}
            </Text>
          </View>
        </View>
      </View>
    </View>
  );
}
