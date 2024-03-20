import {
  View,
  Text,
  Button,
  Modal,
  TouchableOpacity,
  ScrollView,
} from 'react-native';
import React, {useState} from 'react';
import {flex} from '../../components/CreateOwn/styles';
import {IcGraycross, color, fonts, size} from '../../theme';
import Customheader from '../../components/CustomHeader';
import MultiSlider from '@ptomasroos/react-native-multi-slider';
import * as style from './styles'

export default function Filter() {
  const [visibel, setVisible] = useState(false);
  const arr = ['Non Stop', '1 Stop', 'More than 1'];
  const array = [
    'Air India',
    'Air Asia',
    'IndiGo',
    'GoAir',
    'Spicejet',
    'Vistara',
  ];
  const Departure = [
    'Before 6AM',
    '6AM - 12 Noon',
    '12 Noon - 6PM',
    'After 6PM',
  ];
  return (
    <View>
      <Modal
        visible={visibel}
        onRequestClose={() => setVisible(!visibel)}
        style={{height: 100, borderRadius: 8}}>
        <ScrollView>
          <Customheader
            type="first"
            img={<IcGraycross />}
            text="Filters"
            text1={'Clear'}></Customheader>
          <View
            style={{
              marginHorizontal: size.moderateScale(25),
              flexDirection: 'column',
              marginVertical: size.moderateScale(15),
            }}>
            <Text style={{color: color.black, fontFamily: fonts.PoppinsBold}}>
              Stops
            </Text>
          </View>
          {arr.map(data => {
            return (
              <View
                style={{
                  marginHorizontal: size.moderateScale(25),
                  marginVertical: size.moderateScale(5),
                }}>
                <Text style={{fontFamily: fonts.PoppinsRegular}}>{data}</Text>
              </View>
            );
          })}
          <View
            style={{
              marginHorizontal: size.moderateScale(25),
              marginVertical: size.moderateScale(15),
              flexDirection: 'column',
            }}>
            <Text style={{color: color.black, fontFamily: fonts.PoppinsBold}}>
              Airlines
            </Text>
          </View>
          {array.map(data => {
            return (
              <View
                style={{
                  marginHorizontal: size.moderateScale(25),
                  marginVertical: size.moderateScale(5),
                }}>
                <Text style={{fontFamily: fonts.PoppinsRegular}}>{data}</Text>
              </View>
            );
          })}
          <View
            style={{
              marginHorizontal: size.moderateScale(25),
              marginVertical: size.moderateScale(10),
              flexDirection: 'column',
            }}>
            <Text style={{color: color.black, fontFamily: fonts.PoppinsBold}}>
              Price range
            </Text>
            <View style={{marginHorizontal: size.moderateScale(25)}}>
              <MultiSlider></MultiSlider>
            </View>
          </View>

          <View
            style={{
              marginHorizontal: size.moderateScale(25),
              marginVertical: size.moderateScale(15),
            }}>
            <Text style={{color: color.black, fontFamily: fonts.PoppinsBold}}>
              Departure Slot
            </Text>
            <View style={{marginVertical: size.moderateScale(20)}}>
              <Text style={{color: color.black, fontFamily: fonts.PoppinsBold}}>
                Departure Slot of the first flight
              </Text>
            </View>
            {Departure.map(data => {
              return (
                <View
                  style={{
                    marginVertical: size.moderateScale(5),
                  }}>
                  <Text style={{fontFamily: fonts.PoppinsRegular}}>{data}</Text>
                </View>
              );
            })}
          </View>
          <View style={{marginVertical: size.moderateScale(20),marginHorizontal:size.moderateScale(25)}}>
              <Text style={{color: color.black, fontFamily: fonts.PoppinsBold}}>
              Departure Slot of the Second flight
              </Text>
              {Departure.map(data => {
              return (
                <View
                  style={{
                    marginVertical: size.moderateScale(5),
                  }}>
                  <Text style={{fontFamily: fonts.PoppinsRegular}}>{data}</Text>
                </View>
              );
            })}
            </View>
        </ScrollView>
      </Modal>

      <TouchableOpacity onPress={() => setVisible(true)}>
        <View style={{width: 50, height: 50}}>
          <Text>open</Text>
        </View>
      </TouchableOpacity>
      
                  
                   
    </View>
  );
}
