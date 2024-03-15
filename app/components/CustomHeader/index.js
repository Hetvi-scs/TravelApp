import { View, Text } from 'react-native'
import React from 'react'
import { IcGraycross, fontSize } from '../../theme'

export default function Customheader({
    type,

}) {

 if (type=='first')   return (
    <View>
        <View>
            <IcGraycross/>
        </View>
     
    </View>
  )

  if(type='second') return(
    <View>
        <Text>second</Text>
    </View>
  )
}