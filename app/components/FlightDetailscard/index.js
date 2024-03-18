import {View, Text, Image} from 'react-native';
import React from 'react';
import * as styles from './styles';
import {IcLongRightBlueArrow, IcRightBlueArrow, color, fonts, images} from '../../theme';

export default function FlightDetails() {
  return (
    <View>
      <View style={styles.mainview()}>
        <View style={styles.arrowview()}>
          <View style={{flexDirection: 'row', justifyContent: 'center', marginTop:10}}>
            <Text style={{color:color.rama, fontFamily:fonts.PoppinsMedium}}>DEL</Text>
            <IcLongRightBlueArrow style={{marginHorizontal: 15}} />
            <Text  style={{color:color.rama, fontFamily:fonts.PoppinsMedium}}>GOI</Text>
          </View>
          <View style={{justifyContent: 'center', alignItems: 'center'}}>
            <Text>Non stop | 2hrs 35 mins | Economy</Text>
          </View>
        </View>

        <View style={styles.vistaraview()}>
                <Image source={images.vistara} style={{width:24, height:24, borderRadius:5}}/>
                
                <Text style={styles.vistaratxt()}> Vistara | UK 933</Text>
        </View>
      </View>
    </View>
  );
}
