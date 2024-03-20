import {color, fontSize, fonts, size} from '../../theme';

export const container = () => ({
  backgroundColor: color.white,
  height: size.moderateScale(45),
  marginHorizontal: size.moderateScale(25),
  borderRadius: size.moderateScale(8),
  borderWidth: 0.5,
  borderColor: color.gray,
  marginVertical: size.moderateScale(20),
  
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // alignSelf:'center'
});


  export const paymain = () => ({
    backgroundColor: color.white,
    height: size.moderateScale(456),
    borderWidth: 0.4,
    borderColor: color.gray,
    marginVertical: size.moderateScale(30),
    // backgroundColor:'pink'

  });
  export const payopt = () => ({
    color: color.black,
    fontFamily: fonts.PoppinsMedium,
    fontSize: fontSize.small,
    // borderWidth: 1,
    height: size.moderateScale(24),
    width: size.moderateScale(122),
    marginVertical: size.moderateScale(11),
    marginHorizontal:size.moderateScale(12),

  });
  export const itemslist = () => ({
    marginVertical:size.moderateScale(10),
  
    backgroundColor:'pink',
    // marginHorizontal:size.moderateScale(12),
    flexDirection:'row',
    // justifyContent:"space-between",
    // marginHorizontal:size.moderateScale(12),
    // width: size.moderateScale(445),
    height: size.moderateScale(40),
    borderBottomWidth:size.moderateScale(0.2),
       justifyContent: 'center',
    alignItems: 'center',
  alignSelf:'center'

  });
  export const itemview = () => ({
    // marginVertical:size.moderateScale(10),
    // paddingHorizontal:size.moderateScale(12),
    height: size.moderateScale(410),
    // backgroundColor:'yellow',
    // marginVertical:size.moderateScale(10),

  });
  export const sidearrow = () => ({
//    backgroundColor:'pink'

  });
  export const titles = () => ({
    // backgroundColor:'powderblue',
    flex:1,
    // marginHorizontal:size.moderateScale(4)
 
   });