import { View, Text } from 'react-native'
import React from 'react'
import * as style from './style'
import { IcRightsideArrow } from '../../theme'

export default function DueComponent() {
  return (
    
    <View style={style.ftxt()}>
    <Text style={style.firsttxt()}>Due now</Text>

    <View style={style.dollview()}>
    <Text style={style.dollartxt()}>$634.45</Text>
    
    <View style={style.arrowview()}><IcRightsideArrow/></View>
    </View>
 </View>

  )
}