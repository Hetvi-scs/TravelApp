import {color, fontSize, fonts, size} from '../../theme';

export const main = () => ({
  backgroundColor:'rgb(162, 252, 114)',
  flex:1
});
export const container = () => ({
  backgroundColor: color.white,
  height: size.moderateScale(45),
  marginHorizontal: size.moderateScale(25),
  borderRadius: size.moderateScale(8),
  borderWidth: 1,
  borderColor: color.semigray,
  marginVertical: size.moderateScale(20),
  // backgroundColor:'rgb(162, 252, 114)',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // alignSelf:'center'
});
export const card = () => ({
  // backgroundColor: color.white,
  height: size.moderateScale(142),
  // marginHorizontal: size.moderateScale(25),
  borderRadius: size.moderateScale(8),
  // borderWidth: 1,
  // borderColor: color.semigray,
  marginVertical: size.moderateScale(20),
  backgroundColor:'rgb(169, 146, 251)',
  //   justifyContent: 'center',
  //   alignItems: 'center',
  // alignSelf:'center'
});