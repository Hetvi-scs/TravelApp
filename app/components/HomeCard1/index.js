import {View, Text} from 'react-native';
import React from 'react';
import {IcOrangeflight, color, fonts, size} from '../../theme';
import * as styles from './styles';
export default function HomeCard1({icon, text}) {
  return (
    <View style={styles.mainView()}>
      <View>{icon}</View>
      <View style={styles.txtView()}>
        <Text style={styles.text()}>{text}</Text>
      </View>
    </View>
  );
}
