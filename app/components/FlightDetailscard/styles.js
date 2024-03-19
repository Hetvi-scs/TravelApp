import { StyleSheet } from "react-native"
import { color, fontSize, fonts, size } from "../../theme"


export const mainview=()=>({
    backgroundColor:color.white,
  //  width:size.moderateScale(344),
  //  height:size.moderateScale(195),
    marginHorizontal:25
})
export const arrowview=()=>({
   // backgroundColor:'lightblue',
    height:size.moderateScale(50),
    
})
export const vistaraview=()=>({
    height:size.moderateScale(35),
  //  backgroundColor:'lightgreen',
    flexDirection:'row',
    marginHorizontal:10,
    marginTop:10,
    justifyContent:'space-between',
})

export const vistaratxt=()=>({
    fontFamily:fonts.PoppinsSemiBold,
    color:color.lightblack,
    marginHorizontal:4,
    fontSize:fontSize.extrasmall
})
export const txtsviews=()=>({
    
   // backgroundColor:'lightblue',
    marginTop:20,
    marginHorizontal:size.moderateScale(10)
})

export const view19hrs=()=>({
    flexDirection:'row',
    justifyContent:'space-between'
})
export const txt19=()=>({
    fontFamily:fonts.PoppinsSemiBold,
    color:color.semidarkblack
})
export const hrs2=()=>({
    color:color.lightgray,
    fontFamily:fonts.PoppinsRegular
})
export const txt21=()=>({
    fontFamily:fonts.PoppinsSemiBold,
    color:color.semidarkblack
})