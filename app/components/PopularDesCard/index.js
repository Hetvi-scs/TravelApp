import { View, Text, Image } from 'react-native'
import React from 'react'
import * as style from './style'
import { IcGreenActiveStar, IcGreenHalfStar, fontSize, images, size } from '../../theme'
import CustomReview2 from '../CustomeReview2'

export default function PopularDesCrad() {
  return (
<View style={style.container()}>


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

<View style={style.secmain()}>
{/* <View style={{justifyContent:'center',alignItems:'center',marginTop:15}}>
   <CustomReview2/>
    <View 
    style={style.dotview()}>   
    </View>
   
    </View>
    <View style={style.reviewtxt()}> 
    <Text>Very good 200 Reviews</Text>
    <Text>Starting at $40.7</Text>
    </View> */}
       <View style={style.leftview()}>
           <View style={style.starview}><CustomReview2/></View>
            <View 
             style={style.dotview()}>   
            </View>
            <View><Text style={style.reviewtxt()}>Very good 200 Reviews</Text>
            </View>
       </View>
       <View style={style.rightview()}>
       <Text>Starting at $40.7</Text>
       </View>

</View>
  
</View>  
  )
}