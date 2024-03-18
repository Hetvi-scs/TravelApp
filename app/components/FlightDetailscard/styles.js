import { StyleSheet } from "react-native"
import { color, fontSize, fonts, size } from "../../theme"


export const mainview=()=>({
    backgroundColor:'pink',
    width:size.moderateScale(344),
    height:size.moderateScale(195)
    
})
export const arrowview=()=>({
    backgroundColor:'lightblue',
    height:size.moderateScale(50),
    
})
export const vistaraview=()=>({
    height:size.moderateScale(35),
    backgroundColor:'lightgreen',
    flexDirection:'row',
    marginHorizontal:10
})

export const vistaratxt=()=>({
    fontFamily:fonts.PoppinsSemiBold,
    color:color.lightblack,
    marginHorizontal:4,
    fontSize:fontSize.small
})