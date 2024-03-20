import {View, Text, ScrollView} from 'react-native';
import React from 'react';
import {color, fontSize, fonts, size} from '../../theme';
import CreateOwn from '../../components/CreateOwn';
import * as styles from './styles';

export default function CreateYourOwn() {
  const arr = [
    {
      label: 'Flight 1',
      sarrive: 'DEL',
      sdepart: 'GOI',
      arrive: 'New Delhi, India',
      depart: 'Goa, India',
      date: '9 jun 2023',
    },
    {
      label: 'Flight 2',
      sarrive: 'GOI',
      sdepart: 'BOM',
      arrive: 'Goa, India',
      depart: 'Mumbai, India',
      date: '16 jun 2023',
    },
    {
      label: 'Flight 3',
      sarrive: 'DEL',
      sdepart: 'GOI',
      arrive: 'New Delhi, India',
      depart: 'Goa, India',
      date: '9 jun 2023',
    },
  ];

  return (
    <View style={styles.mainView()}>
      <View style={styles.View1()}>
        <Text style={styles.txt()}>Choose transportation</Text>
      </View>
      <View style={styles.View2()}>
        <Text style={styles.Activtxt()}>Flight</Text>
        <Text style={styles.Inactivetxt()}>Train</Text>
        <Text style={styles.Inactivetxt()}>Buses</Text>
        <Text style={styles.Inactivetxt()}>Cabs</Text>
      </View>
      <ScrollView>
        {arr.map(item => (
          <CreateOwn
            label={item.label}
            sarrive={item.sarrive}
            sdepart={item.sdepart}
            arrive={item.arrive}
            depart={item.depart}
            date={item.date}
          />
        ))}
      </ScrollView>
    </View>
  );
}
