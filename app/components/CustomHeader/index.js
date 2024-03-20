import {View, Text, TouchableOpacity} from 'react-native';
import React from 'react';
import {
  IcBeach,
  IcBigemergency,
  IcGraycross,
  color,
  fontSize,
  fonts,
  size,
} from '../../theme';
import * as styles from './styles';
export default function Customheader({
  type,
  text,
  text1,
  text2,
  text3,
  img,
  onPress,
  onPressl
}) {
  if (type == 'first') {
    return (
      <View style={{}}>
        <View style={styles.mainview()}>
          <TouchableOpacity
            onPress={onPress}
            style={{marginTop: size.moderateScale(7),}}>
            <View>{img}</View>
          </TouchableOpacity>
          <View
            style={{
              justifyContent: 'center',
              backgroundColor: 'red',
              alignSelf: 'center',
            }}>
            <Text style={styles.text()}>{text}</Text>
          </View>
          <View>
            <TouchableOpacity style={styles.text1touch()} onPress={onPressl}>
              <Text style={styles.text1()}>{text1}</Text>
            </TouchableOpacity>
          </View>
        </View>

        <View style={styles.lineview()}>
          <View style={styles.line()}></View>
        </View>
      </View>
    );
  }

  if (type == 'second') {
    return (
      <View style={styles.secondmainview()}>
        <View style={{}}>
          <View style={styles.secondmainsecondview()}>
            <TouchableOpacity onPress={onPress}>
              <View style={styles.secondimgview()}>{img}</View>
            </TouchableOpacity>
            <View style={styles.txtview()}>
              <View style={{}}>
                <Text style={styles.txt()}>{text}</Text>
              </View>
              <TouchableOpacity onPress={onPress}>
                <Text style={styles.txt2()}>{text2}</Text>
              </TouchableOpacity>
            </View>
          </View>

          <View>
            <View style={styles.secondline()}></View>
          </View>
        </View>
      </View>
    );
  } else if (type == 'third') {
    return (
      <View style={styles.thirdmainview()}>
        <View style={styles.thirdsecondview()}>
          <TouchableOpacity onPress={onPress}>
            <View style={styles.thirdimgview()}>{img}</View>
          </TouchableOpacity>
          <View style={styles.thirdtxtview()}>
            <Text style={styles.thirdtxt()}>{text3}</Text>
          </View>
        </View>
      </View>
    );
  }
}
