import {color, fonts, size} from '../../theme';

export const mainView = () => ({
  height: size.moderateScale(81),
  width: size.moderateScale(95),
  borderRadius: size.moderateScale(8),
  borderWidth: size.moderateScale(1),
  borderColor: color.semigray,
  alignItems: 'center',
  justifyContent: 'center',
});

export const txtView = () => ({
  marginTop: size.moderateScale(7),
});

export const text = () => ({
  fontFamily: fonts.PoppinsSemiBold,
  color: color.semiblack,
});
