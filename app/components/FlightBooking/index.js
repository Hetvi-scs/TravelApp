import { View, Text,Image } from 'react-native'
import React from 'react'
import * as style from './style'
import { IcLock, color, images } from '../../theme'


export default function FlightBooking({
    type,
    img1,
    imgtxt,
    time,
    place,
    timetxt,
    timetxt2,
    place2,
    price,
    clr
   
}) {
  return (
<View>
     <View style={style.container()}>
        <View style={style.imgtxt()}>
            <Image
                source={img1}
                style={style.vistaraimg()}
            />
            <Text style={style.vistaratxt()}>{imgtxt}</Text>
        </View>

  <View style={style.secline()}>
    <View>
      <Text style={style.time()}>{time}</Text>
      <Text style={style.txt2()}>{place}</Text>
    </View>

    <View style={style.greenlinetxt()}>
      <Text style={style.timetxt()}>{timetxt}</Text>
      <View style={style.rectangle(clr)}></View>
      <View style={style.round()}></View>
      <Text style={style.txt()}>{type}</Text>
    </View>

    <View style={style.anothertimetxt()}>
        <Text style={style.time()}>{timetxt2}</Text>
        <Text style={style.txt2()}>{place2}</Text>
    </View>

    <View style={style.thirdview()}>
        <Text style={style.thirdtime()}>${price}</Text>
        <Text style={style.thirdtxt()}>Per traveller</Text>
    </View>
  </View>

 <View style={style.locktxt()}>
    <View  style={style.lock()}>
        <IcLock/>
    </View>
    <View>
        <Text style={style.lasttxt()}>Lock this price</Text>
    </View>
</View>

     </View>
</View>
  )
}