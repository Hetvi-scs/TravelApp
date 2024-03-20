import {color, fontSize, fonts, size} from '../../theme';

export const view = () => ({
  width: size.deviceWidth,
  height: size.moderateScale(170),
  borderBottomLeftRadius: size.moderateScale(48),
  borderBottomRightRadius: size.moderateScale(48),
  alignItems: 'center',
  justifyContent: 'center',
});

export const imgview = () => ({
  position: 'absolute',
  backgroundColor: 'black',
  height: size.moderateScale(200),
  width: size.deviceWidth,
  opacity: 0.5,
  zIndex: -1,
});

export const img = () => ({
  position: 'absolute',
  width: size.deviceWidth,
  height: size.moderateScale(200),
  zIndex: -2,
});

export const scroll = () => ({
  marginTop: size.moderateScale(-10),
  width: size.deviceWidth,
  height: size.deviceHeight - size.moderateScale(184),
  backgroundColor: color.white,
  borderTopLeftRadius: size.moderateScale(16),
  borderTopRightRadius: size.moderateScale(16),
});

export const ScrollView = () => ({
  height: size.moderateScale(210),
  marginHorizontal: size.moderateScale(25),
  marginVertical: size.moderateScale(15),
  width: size.deviceWidth,
  flexWrap: 'wrap',
  flexDirection: 'row',
});

export const home1 = () => ({
  marginRight: size.moderateScale(18),
  marginVertical: size.moderateScale(10),
});

export const textview = () => ({
  height: size.moderateScale(40),
  alignItems: 'center',
  justifyContent: 'center',
});

export const textview2 = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  marginHorizontal: size.moderateScale(25),
});

export const textview3 = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  width: '79%',
});

export const txt = () => ({
  fontFamily: fonts.PoppinsBold,
  fontSize: fontSize.medium,
  color: color.black,
});

export const txt2 = () => ({
  fontFamily: fonts.PoppinsBold,
  fontSize: fontSize.medium,
  color: color.rama,
  textDecorationLine: 'underline',
});

export const textview4 = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  width: '21%',
});

export const text3 = () => ({
  fontFamily: fonts.PoppinsBold,
  fontSize: fontSize.small,
  color: color.gray,
});

export const home2 = () => ({
  height: size.moderateScale(190),
  alignItems: 'center',
  flexDirection: 'row',
  marginHorizontal: size.moderateScale(25),
});

export const homecard = () => ({marginRight: size.moderateScale(25)});

export const lView = () => ({
  height: size.moderateScale(210),
  marginHorizontal: size.moderateScale(25),
  width: size.deviceWidth,
  flexWrap: 'wrap',
  flexDirection: 'row',
});
