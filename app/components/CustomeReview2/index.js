import {View, Text} from 'react-native';
import React from 'react';
import { IcGreenActiveStar, IcGreenHalfStar, IcHalfgraystar} from '../../theme';
import * as styles from './styles';

export default function CustomReview2({type}) {
  if (type == 'full') {
    return (
      <View style={styles.container()}>
        <IcGreenActiveStar  width={12}/>
        <IcGreenActiveStar  width={12}/>
        <IcGreenActiveStar  width={12}/>
        <IcGreenActiveStar  width={12}/>
        <IcGreenActiveStar  width={12}/>
        
      </View>
    );
  } else {
    return (
      <View style={styles.container()}>
         <IcGreenActiveStar  width={12}/>
        <IcGreenActiveStar  width={12}/>
        <IcGreenActiveStar  width={12}/>
        <IcGreenActiveStar  width={12}/>
        <IcGreenHalfStar  width={12}/>
      </View>
    );
  }
}
