import { View, Text } from 'react-native'
import React from 'react'
import { fonts } from './app/theme'

export default function App() {
  return (
    <View>
      <Text style={{fontFamily:fonts.PoppinsBold}}>App</Text>
    </View>
  )
}