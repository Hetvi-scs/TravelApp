import { View, Text } from 'react-native'
import React from 'react'
import Customheader from '../../components/CustomHeader'
import { IcHeaderBackArrow, images } from '../../theme'

export default function SelectPaymentMode() {
  return (
<View>
    <Customheader
        type='second'
        img={<IcHeaderBackArrow/>}
        text='Select payment mode'

    />  

      
</View>
  )
}