import { View, Text } from 'react-native'
import React from 'react';
import * as style from './style'
import Customheader from '../../components/CustomHeader';
import { IcHeaderBackArrow } from '../../theme';
import DueComponent from '../../components/DueNowComponent';


export default function AddCreditCard() {
  return (
<View style={style.main()}>
          <Customheader
            type='first'
            img={<IcHeaderBackArrow/>}
            text='Add Credit Card'
          />

    <View style={{flex:1,}}>

    <View style={style.container()}>
        <View><DueComponent/></View>

    <View style={style.card()}>

    </View>


    </View>
    </View>

</View>
  )
}