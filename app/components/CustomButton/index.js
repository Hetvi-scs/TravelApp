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
      <TouchableOpacity onPress={onPress}>
        <View style={style.continue}>
          <Text>{text}</Text>
        </View>
      </TouchableOpacity>
    );
  } 
//     return null; // Handle other types or return a default button
//   }
}
