import React from 'react';
import { View, Text, TouchableOpacity } from 'react-native';
import * as style from './styles'
import { fontSize, fonts, lightTheme, size } from '../../theme';

export default function CustomButton({ type, text, onPress }) {
  if (type === 'booknow') {
    return (
      <TouchableOpacity onPress={onPress}>
        <View style={style.booknow()}>
          <Text style={style.booknowtxt()}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  } else if (type === 'continue') {
    return (
      <TouchableOpacity 
      onPress={onPress}>
        <View style={style.cont()}>
          <Text style={style.continuetxt()}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  } else if (type === 'cancle') {
    return (
      <TouchableOpacity 
      onPress={onPress}>
        <View style={style.cancle()}>
          <Text style={style.cancletxt()}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  } else if (type === 'download') {
    return (
      <TouchableOpacity 
      onPress={onPress}>
        <View style={style.cont()}>
          <Text style={style.downtxt()}>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  }
//     return null; // Handle other types or return a default button
//   }
}
