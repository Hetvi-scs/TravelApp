import { View, Text } from 'react-native'
import React from 'react'
import Customheader from './app/components/CustomHeader'
import { fonts } from './app/theme'

export default function App() {
  return (
    <View>
      <Text style={{fontFamily:fonts.PoppinsBold}}>HEYYYY</Text>
      <Customheader type='third' text='Filters' text1='clear' text2='The St. Regis -Mumbai'/>
    </View>
  )
}