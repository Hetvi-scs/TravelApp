import {View, Text, TextInput, Touchable, TouchableOpacity} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {color, size} from '../../theme';

export default function CustomTextInput({
  type,
  imgl,
  placeholder,
  keyboardType,
  numberOfLines,
  OnChangeText,
  imgr,
  onpressr,
  border,
  center,
  secure,
  style,
}) {
  return (
    <View style={styles.view()}>
      {type == 'main' ? (
        <TextInput
          style={styles.input(border)}
          placeholder={placeholder}
          keyboardType={keyboardType}
          numberOfLines={numberOfLines}
          onChangeText={OnChangeText}
          textAlign={center}
          secureTextEntry={secure}
          {...style}
        />
      ) : type == 'second' ? (
        <View style={styles.mainview()}>
          <View style={styles.view2()}>{imgl}</View>
          <TextInput
            style={styles.input2(border)}
            placeholder={placeholder}
            keyboardType={keyboardType}
            numberOfLines={numberOfLines}
            onChangeText={OnChangeText}
            textAlign={center}
            secureTextEntry={secure}
            {...style}
          />
        </View>
      ) : (
        <View style={styles.mainview()}>
          <View style={styles.view4()}>{imgl}</View>

          <TextInput
            style={styles.input2(border)}
            placeholder={placeholder}
            keyboardType={keyboardType}
            numberOfLines={numberOfLines}
            onChangeText={OnChangeText}
            textAlign={center}
            secureTextEntry={secure}
            {...style}
          />
          <TouchableOpacity style={styles.View3()}>
            <View>{imgr}</View>
          </TouchableOpacity>
        </View>
      )}
    </View>
  );
}
