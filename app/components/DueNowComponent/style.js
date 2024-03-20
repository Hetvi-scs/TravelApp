import {color, fontSize, fonts, size} from '../../theme';


export const ftxt = () => ({
    marginVertical:size.moderateScale(10),
    marginHorizontal:size.moderateScale(10),
    flexDirection:'row',
    // backgroundColor:'pink'
  })
  export const dollartxt = () => ({
    color: color.black,
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: fontSize.extrasmall,
    // borderWidth: 1,
    height: size.moderateScale(24),
    width: size.moderateScale(64),
    // marginHorizontal:size.moderateScale(50),

  })
  export const firsttxt = () => ({
    color: color.black,
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: fontSize.extrasmall,
  //   borderWidth: 1,
    height: size.moderateScale(24),
    width: size.moderateScale(64),
    // backgroundColor:'red',
    flex:1
  })
  export const dollview = () => ({
    flexDirection:'row',
    // marginHorizontal:size.moderateScale(150),
  })
  export const arrowview = () => ({
    // backgroundColor:'yellow',
    height:size.moderateScale(20),
    width:size.moderateScale(20),
    borderRadius:size.moderateScale(20),
   alignItems:'center',
   borderWidth:1.5,
   borderColor:color.gray,
justifyContent:'center'
  })
