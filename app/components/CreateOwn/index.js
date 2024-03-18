import {View, Text} from 'react-native';
import React from 'react';
import {
  IcBlueDots,
  IcBluePlane,
  IcBluelocation,
  IcCalenderBlue,
  IcOppositeArrow,
} from '../../theme';
import * as styles from './styles';

export default function CreateOwn({
  label,
  arrive,
  depart,
  sarrive,
  sdepart,
  date,
}) {
  return (
    <View style={styles.MainView()}>
      <View style={styles.View()}>
        <Text style={styles.txt()}>{label}</Text>
      </View>
      <View>
        <View style={styles.flexView()}>
          <View style={styles.mview1()}>
            <View style={styles.center()}>
              <IcBluePlane />
              <IcBlueDots />
              <IcBluelocation />
            </View>
          </View>
          <View style={styles.flex()}>
            <View style={styles.mview2()}>
              <View style={styles.mview3()}>
                <Text style={styles.txt1()}>{sarrive}</Text>
                <Text style={styles.txt2()}>{arrive}</Text>
              </View>
              <View style={styles.row()}>
                <Text style={styles.txt1()}>{sdepart}</Text>
                <Text style={styles.txt2()}>{depart}</Text>
              </View>
            </View>
          </View>
          <View style={styles.lview()}>
            <View style={styles.lview2()}>
              <IcOppositeArrow />
            </View>
          </View>
        </View>
        <View style={styles.lviewtxt()}>
          <View style={styles.center2()}>
            <IcCalenderBlue />
          </View>
          <View style={styles.padding()}>
            <Text style={styles.ltxt1()}>Depart</Text>
            <Text style={styles.ltxt2()}>{date}</Text>
          </View>
        </View>
      </View>
    </View>
  );
}
