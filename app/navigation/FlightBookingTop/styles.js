import {color, fontSize, fonts, size} from '../../theme';

export const mainView = () => ({backgroundColor: color.white});

export const view1 = () => ({marginTop: size.moderateScale(20)});

export const view2 = () => ({
  height: size.moderateScale(50),
  marginLeft: size.moderateScale(17),
  marginRight: size.moderateScale(25),
  flexDirection: 'row',
  alignItems: 'center',
});

export const jun = () => ({
  marginVertical: size.moderateScale(10),
  height: size.moderateScale(24),
  width: size.moderateScale(39),
  borderRadius: size.moderateScale(8),
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: color.brown,
  transform: 'rotate(-90deg)',
});

export const txt = () => ({
  fontFamily: fonts.PoppinsMedium,
  fontSize: fontSize.medium,
  color: color.white,
});

export const scroll = () => ({
  width: size.moderateScale(66),
  height: size.moderateScale(30),
  borderWidth: size.moderateScale(1),
  borderColor: color.rama,
  backgroundColor: color.lightrama,
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: size.moderateScale(8),
  marginHorizontal: size.moderateScale(10),
});

export const scroll2 = () => ({
  width: size.moderateScale(66),
  height: size.moderateScale(30),
  borderWidth: size.moderateScale(0.5),
  alignItems: 'center',
  justifyContent: 'center',
  borderRadius: size.moderateScale(8),
  marginHorizontal: size.moderateScale(10),
});

export const scrolltxt = () => ({
  fontFamily: fonts.PoppinsMedium,
  fontSize: fontSize.extrasmall,
  color: color.semiblack,
});

export const scrolltxt2 = () => ({
  fontFamily: fonts.PoppinsMedium,
  fontSize: fontSize.extrasmall,
  color: color.rama,
});
export const btn = () => ({
  marginVertical: size.moderateScale(10),
  marginHorizontal: size.moderateScale(25),
  flexDirection: 'row',
});

export const btnview = () => ({
  marginRight: size.moderateScale(25),
  width: '46%',
});

export const btnview2 = () => ({width: '46%'});
