import {color, fontSize, fonts, size} from '../../theme';

export const imgview = () => ({
  flexDirection: 'row',
  marginVertical: size.moderateScale(16),
  marginHorizontal: size.moderateScale(20),
});

export const txtview = () => ({
  flex: 1,
  marginLeft: size.moderateScale(2),
});

export const txt = () => ({
  fontFamily:fonts.PoppinsMedium,
  fontSize: fontSize.extrasmall,
  color:color.lightgray,
});

export const flatlistview = () => ({
  marginTop: size.moderateScale(20),
});

export const flatline = () => ({
  height: 1,
  backgroundColor:color.semigray,
  width: '89%',
  marginHorizontal: size.moderateScale(20),
});
