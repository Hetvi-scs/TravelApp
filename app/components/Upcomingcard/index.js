import { View, Text } from 'react-native'
import React from 'react'
import { color, fonts, size } from '../../theme'

export default function Upcomingcard() {
  return (
    <View>
      <View style={{backgroundColor:'pink', marginHorizontal:size.moderateScale(25)}}>
        <View style={{flexDirection:'row', justifyContent:'flex-start'}}>
            <Text style={{marginLeft:10, fontFamily:fonts.PoppinsSemiBold, color:color.white}}>
                15 
            </Text>
            <Text style={{marginHorizontal:size.moderateScale(7),  fontFamily:fonts.PoppinsSemiBold, color:color.white}}>
                to
            </Text>
            <Text>
                17
            </Text>
            <Text style={{marginHorizontal:size.moderateScale(6)}}>
                July
            </Text>
        </View>
      </View>
    </View>
  )
}