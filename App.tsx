import { View, Text, Image } from 'react-native'
import React from 'react'
import { IcBlueDots, IcBluePlane, IcBookCabSearch, IcFilter, IcSearch, IcSearchIndicator, color, fontSize, images } from './app/theme'
import CustomTextInput from './app/components/CustomTextInput'

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <CustomTextInput imgl={<IcSearch />} placeholder={'search'} imgr={<IcFilter />} />
      <CustomTextInput imgl={<IcBookCabSearch />} placeholder={'search'} type={'main'} border={color.orange} />
      <CustomTextInput imgl={<IcBookCabSearch />} placeholder={'Search reviews based on your preferences'} type={'second'} />
    </View>
  )
}