import {View, Text, TextInput} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {color} from '../../theme';

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
}) {
  return (
    <View style={styles.view()}>
      {type == 'main' ? (
        <TextInput
          style={styles.input()}
          placeholder={placeholder}
          keyboardType={keyboardType}
          numberOfLines={numberOfLines}
          onChangeText={OnChangeText}
        />
      ) : type == 'second' ? (
        <View style={styles.mainview()}>
          <View style={styles.view2()}>{imgl}</View>
          <TextInput
            style={styles.input2()}
            placeholder={placeholder}
            keyboardType={keyboardType}
            numberOfLines={numberOfLines}
            onChangeText={OnChangeText}
          />
        </View>
      ) : (
        <View style={styles.mainview()}>
          <View style={styles.view2()}>{imgl}</View>
          <View style={styles.View3()}>{imgr}</View>
          <TextInput
            style={styles.input2()}
            placeholder={placeholder}
            keyboardType={keyboardType}
            numberOfLines={numberOfLines}
            onChangeText={OnChangeText}
          />
        </View>
      )}
    </View>
  );
}
