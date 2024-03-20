import {color, fontSize, fonts, size} from '../../theme';

export const container = () => ({
  height: size.moderateScale(160),
  marginHorizontal: size.moderateScale(25),
  borderRadius: 8,
  backgroundColor: color.white,
});
export const vistaraimg = () => ({
  height: size.moderateScale(24),
  width: size.moderateScale(24),
  marginHorizontal: size.moderateScale(12),
  marginVertical: size.moderateScale(12),
  borderRadius: size.moderateScale(6),
});
export const lock = () => ({
  marginHorizontal: size.moderateScale(12),
  marginVertical: size.moderateScale(15),
});
export const imgtxt = () => ({
  flexDirection: 'row',
});
export const vistaratxt = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.PoppinsMedium,
  color: color.black,
  alignSelf: 'center',
});
export const time = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.PoppinsSemiBold,
  color: color.black,
  marginHorizontal: size.moderateScale(12),
  width: size.moderateScale(40),
  height: size.moderateScale(20),
});
export const thirdtime = () => ({
  fontSize: size.moderateScale(13),
  fontFamily: fonts.PoppinsSemiBold,
  color: color.black,

  width: size.moderateScale(49),

  marginTop: size.moderateScale(-5),
});
export const txt2 = () => ({
  fontSize: size.moderateScale(12),
  fontFamily: fonts.PoppinsMedium,
  color: color.black,
  marginHorizontal: size.moderateScale(12),
});
export const rectangle = (clr) => ({
  backgroundColor: clr ? clr :color.parrotgreen,
  width: 80,
  height: 2,

  marginVertical: size.moderateScale(8),
});
export const round = () => ({
  backgroundColor: color.gray,
  width: 6,
  height: 6,
  borderRadius: 8,
  alignSelf: 'center',

  marginVertical: size.moderateScale(5),
  position: 'absolute',
});
export const secline = () => ({
  flexDirection: 'row',
  marginVertical: size.moderateScale(12),
});
export const anothertimetxt = () => ({
  marginVertical: size.moderateScale(-5),
  marginHorizontal: size.moderateScale(12),
});
export const greenlinetxt = () => ({
  flexDirection: 'column',

  marginHorizontal: size.moderateScale(14),
});
export const timetxt = () => ({
  fontSize: size.moderateScale(10),
  fontFamily: fonts.PoppinsSemiBold,
  color: color.black,
  marginTop: size.moderateScale(-19),
  alignSelf: 'center',
});
export const txt = () => ({
  fontSize: size.moderateScale(10),
  fontFamily: fonts.PoppinsLight,
  color: color.black,
  alignSelf: 'center',
});
export const thirdtxt = () => ({
  fontSize: size.moderateScale(9),
  fontFamily: fonts.PoppinsLight,
  color: color.black,
  alignSelf: 'center',
});
export const thirdview = () => ({
  marginHorizontal: size.moderateScale(-5),
});
export const locktxt = () => ({
  flexDirection: 'row',
});
export const lasttxt = () => ({
  fontSize: size.moderateScale(11),
  fontFamily: fonts.PoppinsLight,
  color: color.black,
  marginVertical:size.moderateScale(15),
  marginHorizontal:size.moderateScale(-13),

});