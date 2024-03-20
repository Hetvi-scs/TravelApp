import React from 'react';
import {View, SafeAreaView, StatusBar} from 'react-native';
import {KeyboardAwareScrollView} from 'react-native-keyboard-aware-scroll-view';

import * as styles from './styles';

import {color, images} from '../../theme';
import Activity from '../ActivityIndicator';

export const Screen = props => {
  const {
    children,
    withScroll,
    style,
    bgColor,
    scrollStyle,
    scrollRef,
    onScrolling,
    keyboardShouldPersistTaps,
    extraScrollHeight,
    loading,
  } = props;

  if (withScroll) {
    return (
      <SafeAreaView style={styles.mainContainer(bgColor)}>
        <StatusBar
          backgroundColor={bgColor ?? color.lightwhite}
          barStyle={bgColor ? 'light-content' : 'dark-content'}
        />
        {loading && (
          <Activity
            img={images.vistara}
            label1={'Searching for cheap flight'}
            label2={
              'You told us when and where...now let us take you there withour great fares on over 500 airlines '
            }
          />
        )}
        <KeyboardAwareScrollView
          keyboardShouldPersistTaps={keyboardShouldPersistTaps || 'handled'}
          contentContainerStyle={scrollStyle}
          showsVerticalScrollIndicator={false}
          bounces={false}
          onScroll={onScrolling}
          innerRef={scrollRef}
          scrollEventThrottle={16}
          extraScrollHeight={extraScrollHeight}
          enableOnAndroid={true}
          alwaysBounceVertical={false}
          {...props}>
          <View style={styles.full()}>{children}</View>
        </KeyboardAwareScrollView>
      </SafeAreaView>
    );
  } else {
    return (
      <SafeAreaView style={styles.container(bgColor)}>
        <StatusBar
          backgroundColor={bgColor ?? color.lightwhite}
          barStyle={bgColor ? 'light-content' : 'dark-content'}
        />
        {loading && (
          <Activity
            img={images.vistara}
            label1={'Searching for cheap flight'}
            label2={
              'You told us when and where...now let us take you there withour great fares on over 500 airlines '
            }
          />
        )}
        <View style={styles.container(style)}>{children}</View>
      </SafeAreaView>
    );
  }
};
