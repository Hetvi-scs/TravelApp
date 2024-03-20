import {color, fontSize, fonts, size} from '../../theme';

export const input = border => ({
  paddingLeft: size.moderateScale(15),
  borderColor: border ? border : color.gray,
  borderRadius: size.moderateScale(6),
  borderWidth: border ? size.moderateScale(2) : size.moderateScale(1),
  fontFamily: fonts.PoppinsSemiBold,
  color: color.black,
  fontSize: fontSize.extrasmall,
});
export const input2 = border => ({
  flex: 1,
  height: size.moderateScale(50),
  paddingLeft: size.moderateScale(35),
  borderColor: border ? border : color.gray,
  borderRadius: size.moderateScale(6),
  borderWidth: size.moderateScale(1),
  fontFamily: fonts.PoppinsMedium,
  fontSize: fontSize.extrasmall,
  color: color.black,
});

export const view = () => ({
  marginHorizontal: size.moderateScale(25),
  borderRadius: size.moderateScale(7),
  backgroundColor: 'white',
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

export const view4 = () => ({
  height: size.moderateScale(40),
  width: size.moderateScale(45),
  marginVertical: size.moderateScale(4),
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
});

export const View3 = () => ({
  height: size.moderateScale(45),
  width: size.moderateScale(47),
  marginVertical: size.moderateScale(2),
  marginHorizontal: size.moderateScale(272),
  alignItems: 'center',
  justifyContent: 'center',
  position: 'absolute',
});
