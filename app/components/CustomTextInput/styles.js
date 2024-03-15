import {color, fontSize, fonts, size} from '../../theme';

export const input = () => ({
  paddingLeft: size.moderateScale(15),
  borderColor: color.gray,
  borderRadius: size.moderateScale(6),
  borderWidth: size.moderateScale(1),
  fontFamily: fonts.PoppinsSemiBold,
  // marginLeft: 10,
  fontSize: fontSize.small,
});
export const input2 = () => ({
  flex: 1,
  paddingLeft: size.moderateScale(35),
  borderColor: color.gray,
  borderRadius: size.moderateScale(6),
  borderWidth: size.moderateScale(1),
  fontFamily: fonts.PoppinsMedium,
  fontSize: fontSize.small,
});

export const view = () => ({
  paddingHorizontal: size.moderateScale(25),
});

export const mainview = () => ({flexDirection: 'row'});

export const view2 = () => ({
  height: size.moderateScale(40),
  width: size.moderateScale(45),
  marginVertical: size.moderateScale(7),
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
});

export const View3 = () => ({
  height: size.moderateScale(47),
  width: size.moderateScale(47),
  marginVertical: size.moderateScale(2),
  marginHorizontal: size.moderateScale(272),
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
});
