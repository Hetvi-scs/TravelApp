import { View, Text, Image } from 'react-native'
import React from 'react'
import { IcBlueDots, IcBluePlane, IcBookCabSearch, IcFilter, IcOppositeArrow, IcOrangetrains, IcSearch, IcSearchIndicator, color, fontSize, images } from './app/theme'
import CustomTextInput from './app/components/CustomTextInput'
import HomeCard1 from './app/components/HomeCard1'

export default function App() {
  return (
    <View style={{ marginTop: 200, marginLeft: 100 }}>
      <HomeCard1 icon={<IcOrangetrains />} text={'Train'} />
      <HomeCard1 icon={<IcOrangetrains />} text={'Train'} />
      <HomeCard1 icon={<IcOrangetrains />} text={'Train'} />
    </View>
  )
}