import { View, Text, Image } from 'react-native'
import React from 'react'
import * as style from './style'
import { IcGreenActiveStar, IcGreenHalfStar, images } from '../../theme'

export default function PopularDesCrad() {
  return (
<View>
   <View style={style.mainimage()}>
        <View style={style.bigimageview()}>
            <Image
                source={images.delhitemple}
                style={style.bigimage()}
            />
        </View>

<View style={style.fourimageview()}>
    <View style={style.firsttwoimg()}>
           <View style={style.firstview()}>
           <Image
                source={images.building}
                style={style.oneimg()}
            />
           </View>
           <View style={style.secondview()}>
            <Image
                source={images.tajmahal}
                style={style.twoimg()}
            />
            </View>
     </View>

     <View style={style.secondtwoimg()}>
         <View style={style.thirdview()}>
            <Image
                source={images.people}
                style={style.threeimg()}
            />
            </View>
            <View style={style.fourthview()}>
            <Image
                source={images.memorial}
                style={style.threeimg()}
            />
            <View style={style.imgtxtview()}>
            <Text style={style.imgtxt()}>+40</Text></View>
            </View>   
     </View>
     </View>
   </View>
  
   <View>
    
   </View>
</View>  
  )
}