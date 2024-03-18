import {View, Text} from 'react-native';
import React from 'react';
import {IcGraysinglestar, IcHalfgraystar} from '../../theme';
import * as styles from './styles';

export default function CustomReview({type}) {
  if (type == 'full') {
    return (
      <View style={styles.container()}>
        <IcGraysinglestar width={12} />
        <IcGraysinglestar width={12} />
        <IcGraysinglestar width={12} />
        <IcGraysinglestar width={12} />
        <IcGraysinglestar width={12} />
      </View>
    );
  } else {
    return (
      <View style={styles.container()}>
        <IcGraysinglestar width={12} />
        <IcGraysinglestar width={12} />
        <IcGraysinglestar width={12} />
        <IcGraysinglestar width={12} />
        <IcHalfgraystar width={12} />
      </View>
    );
  }
}
