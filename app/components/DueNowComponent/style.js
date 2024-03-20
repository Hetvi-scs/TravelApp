import {color, fontSize, fonts, size} from '../../theme';


export const ftxt = () => ({
    marginVertical:size.moderateScale(10),
    marginHorizontal:size.moderateScale(12),
    flexDirection:'row'
  })
  export const dollartxt = () => ({
    color: color.black,
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: fontSize.small,
    // borderWidth: 1,
    height: size.moderateScale(24),
    width: size.moderateScale(64),
    // marginHorizontal:size.moderateScale(50),

  })
  export const firsttxt = () => ({
    color: color.black,
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: fontSize.small,
  //   borderWidth: 1,
    height: size.moderateScale(24),
    width: size.moderateScale(64),
  })
  export const dollview = () => ({
    flexDirection:'row',
    marginHorizontal:size.moderateScale(150),
  })
  export const arrowview = () => ({
    backgroundColor:'white',
    height:size.moderateScale(24),
    width:size.moderateScale(24),
    borderRadius:size.moderateScale(20),
   alignItems:'center',
   borderWidth:1,
   borderColor:color.gray,
justifyContent:'center'
  })
