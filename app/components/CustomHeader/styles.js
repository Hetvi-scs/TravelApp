import {color, fontSize, fonts, size} from '../../theme';

export const mainview = () => ({
  flexDirection: 'row',
  marginTop: size.moderateScale(20),
  marginHorizontal: size.moderateScale(25),
  justifyContent: 'space-between',
});

export const text = () => ({
  fontFamily: fonts.PoppinsBold,
  fontSize: fontSize.large,
});

export const text1touch = () => ({
  marginTop: size.moderateScale(3),
});

export const text1 = () => ({
  color: color.orange,
  fontFamily: fonts.PoppinsBoldtailc,
});

export const lineview = () => ({
  marginTop: size.moderateScale(10),
  marginHorizontal: size.moderateScale(25),
});

export const line = () => ({
  backgroundColor: color.lightgray,
  // width: size.moderateScale(358),
  height: size.moderateScale(1),
});

export const secondmainview = () => ({
  marginHorizontal: size.moderateScale(25),
  marginTop: size.moderateScale(20),
});

export const secondmainsecondview = () => ({
  flexDirection: 'row',
  // backgroundColor:'pink',
  //  justifyContent:"center",
  alignItems: 'center',
  alignContent: 'flex-start',
});

export const secondimgview = () => ({
  position: 'absolute',
  zIndex: 2,
  height: size.moderateScale(20),
  width: size.moderateScale(20),
});
export const txtview = () => ({
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
});

export const txt = () => ({
  fontFamily: fonts.PoppinsBold,
  fontSize: fontSize.medium,
  textAlign: 'center',
  // marginHorizontal: size.moderateScale(100),
  color: color.black,
  marginTop: size.moderateScale(15),
  //alignSelf:'center'
});

export const txt2 = () => ({
  marginHorizontal: size.moderateScale(90),
});

export const secondline = () => ({
  backgroundColor: color.lightgray,
  //  width: size.moderateScale(358),
  height: size.moderateScale(1),
});

export const thirdmainview = () => ({
  marginHorizontal: size.moderateScale(25),
  marginTop: size.moderateScale(20),
});

export const thirdsecondview = () => ({
  flexDirection: 'row',
  justifyContent: 'flex-start',
});

export const thirdimgview = () => ({
  marginTop: size.moderateScale(9),
  height: size.moderateScale(40),
  width: size.moderateScale(40),
});

export const thirdtxtview = () => ({
  justifyContent: 'center',
  alignItems: 'center',
  flex: 1,
  marginBottom: size.moderateScale(10),
});

export const thirdtxt = () => ({
  fontFamily: fonts.PoppinsSemiBold,
  fontSize: fontSize.large,
  color: color.orange,
  textAlign: 'center',
});
