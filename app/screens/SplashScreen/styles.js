import {color, fontSize, fonts, size} from '../../theme';

export const view = () => ({
  width: size.deviceWidth,
  height: size.moderateScale(400),
  borderBottomLeftRadius: size.moderateScale(48),
  borderBottomRightRadius: size.moderateScale(48),
});

export const mark = () => ({
  position: 'absolute',
  zIndex: 2,
  margin: size.moderateScale(20),
});

export const img = () => ({
  width: size.deviceWidth,
  height: size.moderateScale(400),
  borderBottomLeftRadius: size.moderateScale(48),
  borderBottomRightRadius: size.moderateScale(48),
});

export const txtview = () => ({
  height: size.deviceHeight - size.moderateScale(400),
  alignItems: 'center',
  justifyContent: 'center',
});

export const txtview2 = () => ({
  height: size.moderateScale(150),
  marginHorizontal: size.moderateScale(25),
});

export const txt = () => ({
  fontSize: fontSize.big,
  fontFamily: fonts.PoppinsMedium,
  color: color.lightblack,
  textAlign: 'center',
});

export const txt2 = () => ({
  fontSize: fontSize.medium,
  fontFamily: fonts.PoppinsLight,
  color: color.semiblack,
  textAlign: 'center',
});

export const btn = () => ({
  marginVertical: size.moderateScale(10),
  backgroundColor: color.orange,
  height: size.moderateScale(72),
  width: size.moderateScale(72),
  borderRadius: size.moderateScale(72),
  alignItems: 'center',
  justifyContent: 'center',
});
