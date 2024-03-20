import {View, Text, Image, TouchableOpacity, StatusBar} from 'react-native';
import React from 'react';
import {
  IcGreenActiveStar,
  IcRightsideArrow,
  IcRightwhitearrow,
  IcWhitetower,
  color,
  fontSize,
  fonts,
  images,
  size,
} from '../../theme';
import Rightwhitearrow from '../../theme/images/svg/Rightwhitearrow';
import * as styles from './styles';

export default function SplashScreen() {
  return (
    <View>
      <StatusBar translucent backgroundColor={'transparent'}></StatusBar>
      <View style={styles.view()}>
        <View style={styles.mark()}>
          <IcWhitetower />
        </View>
        <Image source={images.hotel} style={styles.img()} />
      </View>
      <View style={styles.txtview()}>
        <View style={styles.txtview2()}>
          <View>
            <Text style={styles.txt()}>Tripify</Text>
          </View>
          <View>
            <Text style={styles.txt2()}>
              The ultimate travel app for easy multi-city adventures. Plan,
              book, and explore hassle-free.
            </Text>
          </View>
        </View>
        <TouchableOpacity onPress={() => {}}>
          <View style={styles.btn()}>
            <IcRightwhitearrow />
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
}
