import { View, Text, Image } from 'react-native'
import React from 'react'
import { IcBlueDots, IcBluePlane, IcBookCabSearch, IcFilter, IcSearchIndicator, fontSize, images } from './app/theme'
import CustomTextInput from './app/components/CustomTextInput'

export default function App() {
  return (
    <View style={{ marginTop: 200 }}>
      <CustomTextInput imgl={<IcBookCabSearch />} placeholder={'search'} imgr={<IcFilter />} />
      <CustomTextInput imgl={<IcBookCabSearch />} placeholder={'search'} type={'main'} />
      <CustomTextInput imgl={<IcBookCabSearch />} placeholder={'search'} type={'second'} />
    </View>
  )
}