import {View, Text} from 'react-native';
import React from 'react';
import {
  IcBeach,
  IcSearchIndicator,
  IcSmile,
  color,
  fontSize,
  fonts,
  size,
} from '../../theme';
import LottieView from 'lottie-react-native';
import * as styles from './styles';

export default function Activity({img, label1, label2}) {
  return (
    <View style={styles.Main()}>
      <View style={styles.lotti()}>
        <View style={styles.view()}>{img}</View>
        <LottieView
          style={{flex: 1}}
          source={require('../../theme/lottieicons/Activity.json')}
          autoPlay></LottieView>
      </View>
      <View style={styles.margin()}>
        <Text style={styles.txt()}>{label1}</Text>
        <View style={styles.view1()}>
          <Text style={styles.txt2()}>{label2}</Text>
        </View>
      </View>
    </View>
  );
}
