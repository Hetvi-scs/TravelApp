import { View, Text } from 'react-native'
import React from 'react'
import FlightDetails from '../../components/FlightDetailscard'
import Upcomingcard from '../../components/Upcomingcard'

export default function MyTrips() {
  return (
    <View style={{backgroundColor:'pink', flex:1,}}>
      
      <View style={{justifyContent:'space-between', flexDirection:'column' }}>
      <Upcomingcard/>
      <Upcomingcard/>
      <Upcomingcard/>
      </View>
    </View>
  )
}