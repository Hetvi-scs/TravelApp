import { View, Text, TouchableOpacity } from 'react-native'
import React from 'react'
import { IcBeach, IcBigemergency, IcGraycross, color, fontSize, fonts, size } from '../../theme'

export default function Customheader({
    type,
    text,
    text1,
    text2,
    text3,
    img
}) {

 if (type=='first')   
 {
    return (
    <View>
        <View style={{flexDirection:'row', marginTop:30, marginHorizontal:size.moderateScale(25), justifyContent:'space-between'}}>
        <View>
            {img}
        </View>
        <View style={{}}>
            <Text style={{fontFamily:fonts.PoppinsBold, fontSize:fontSize.large}}>{text}</Text>
        </View>
        <View>
            <TouchableOpacity style={{marginTop:3}}>
                <Text style={{ color:color.orange, fontFamily:fonts.PoppinsBoldtailc}}>{text1}</Text>
            </TouchableOpacity>
        </View>
        </View>

        <View style={{marginTop:size.moderateScale(10)}}> 
            <View style={{backgroundColor:color.lightgray, width:size.moderateScale(358), height:size.moderateScale(1), marginHorizontal:size.moderateScale(25)}}>
            </View>
        </View>
    </View>
  )
    }

   if(type=='second') 
  {
  return(
    <View>
        <View style={{}}>
        <View style={{flexDirection:'row', marginTop:size.moderateScale(30), marginHorizontal:size.moderateScale(25)}}>
      <View style={{marginTop:size.moderateScale(13)}}>
        {img}
         </View>
         <View style={{}}>
        <View style={{justifyContent:'center'}}>
            <Text style={{fontFamily:fonts.PoppinsBold, fontSize:fontSize.large, marginHorizontal:size.moderateScale(120), color:color.black}}>{text}</Text>
            <Text style={{ marginHorizontal:size.moderateScale(90)}}>
           {text2}
        </Text>
        </View>
        </View>
     </View>
        <View style={{marginTop:size.moderateScale(10)}}> 
            <View style={{backgroundColor:color.lightgray, width:size.moderateScale(358), height:size.moderateScale(1), marginHorizontal:size.moderateScale(25)}}>
             </View>
        </View>
        </View> 
    </View>
  )
  }

  else if(type=='third')
  {
  return(
    <View>
        <View style={{flexDirection:'row', marginTop:size.moderateScale(30), marginHorizontal:size.moderateScale(25), justifyContent:'flex-start'}}>
         <View style={{marginTop:size.moderateScale(9), height:size.moderateScale(40),width:size.moderateScale(40)}}>
       {img}
         </View>
         <View style={{marginHorizontal:size.moderateScale(100)}}>
             <Text style={{fontFamily:fonts.PoppinsSemiBold, fontSize:fontSize.extralarge, color:color.black}}>{text3}</Text>
         </View>
         </View>
    </View>
  )
}
}