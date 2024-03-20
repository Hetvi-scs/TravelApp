import {color, fontSize, fonts, size} from '../../theme';

export const mainView = () => ({backgroundColor: color.white, flex: 1});

export const View1 = () => ({
  marginHorizontal: size.moderateScale(25),
  marginVertical: size.moderateScale(10),
});

export const txt = () => ({
  fontFamily: fonts.PoppinsMedium,
  color: color.black,
  fontSize: fontSize.medium,
});

export const View2 = () => ({
  marginVertical: size.moderateScale(15),
  flexDirection: 'row',
  justifyContent: 'space-around',
});

export const Activtxt = () => ({
  fontFamily: fonts.PoppinsMedium,
  color: color.black,
  fontSize: fontSize.medium,
  textDecorationLine: 'underline',
});

export const Inactivetxt = () => ({
  fontFamily: fonts.PoppinsMedium,
  color: color.gray,
  fontSize: fontSize.medium,
});
