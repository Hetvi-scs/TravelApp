import {color, fontSize, fonts, size} from '../../theme';

export const MainView = () => ({
  marginHorizontal: size.moderateScale(25),
  height: size.moderateScale(192),
  borderWidth: size.moderateScale(1),
  borderColor: color.lightwhite,
  borderRadius: size.moderateScale(8),
  marginVertical: size.moderateScale(15),
});

export const View = () => ({
  height: size.moderateScale(50),
  borderBottomColor: color.lightwhite,
  borderBottomWidth: size.moderateScale(2),
  justifyContent: 'center',
});

export const txt = () => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.PoppinsMedium,
  color: color.extralightblack,
  marginHorizontal: size.moderateScale(10),
});

export const flexView = () => ({
  height: size.moderateScale(80),
  flexDirection: 'row',
});

export const mview1 = () => ({
  width: '14%',
  height: '100%',
  justifyContent: 'center',
  alignItems: 'center',
});

export const center = () => ({
  alignItems: 'center',
  justifyContent: 'center',
  paddingLeft: size.moderateScale(10),
});

export const flex = () => ({
  flex: 1,
  height: '100%',
  flexDirection: 'row',
});

export const mview2 = () => ({
  flex: 1,
  height: '100%',
  paddingHorizontal: size.moderateScale(10),
  justifyContent: 'center',
});

export const mview3 = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  height: '50%',
  borderBottomColor: color.lightwhite,
  borderBottomWidth: size.moderateScale(2),
});

export const txt1 = () => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.PoppinsSemiBold,
  color: color.extralightblack,
});

export const txt2 = () => ({
  paddingLeft: size.moderateScale(10),
  fontSize: fontSize.small,
  fontFamily: fonts.PoppinsMedium,
  color: color.lightgray,
});

export const row = () => ({
  flexDirection: 'row',
  alignItems: 'center',
  height: '50%',
});

export const lview = () => ({
  width: '17%',
  height: '100%',
  justifyContent: 'center',
  paddingLeft: size.moderateScale(10),
});

export const lview2 = () => ({
  backgroundColor: color.rama,
  alignItems: 'center',
  justifyContent: 'center',
  height: size.moderateScale(20),
  width: size.moderateScale(21),
  borderRadius: size.moderateScale(5),
});

export const lviewtxt = () => ({
  height: size.moderateScale(60),
  borderTopColor: color.lightwhite,
  borderTopWidth: size.moderateScale(2),
  flexDirection: 'row',
});

export const center2 = () => ({
  height: size.moderateScale(50),
  width: size.moderateScale(50),
  justifyContent: 'center',
  alignItems: 'center',
});

export const padding = () => ({
  paddingLeft: size.moderateScale(5),
});

export const ltxt1 = () => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.PoppinsSemiBold,
  color: color.lightgray,
});

export const ltxt2 = () => ({
  fontSize: fontSize.small,
  fontFamily: fonts.PoppinsRegular,
  color: color.extralightblack,
});
