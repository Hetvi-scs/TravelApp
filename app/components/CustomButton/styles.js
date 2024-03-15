import {color, fontSize, fonts, size} from '../../theme';

export const booknow = () => ({
  backgroundColor: color.semiorange,
  height: size.moderateScale(38),
  borderRadius: size.moderateScale(8),
  justifyContent: 'center',
  alignItems: 'center',
});

export const booknowtxt = () => ({
    color:color.white,
  fontFamily: fonts.PoppinsMedium,
  fontSize: fontSize.extrasmall,
});

export const cont = () => ({
    backgroundColor: color.orange,
    height: size.moderateScale(43),
    borderRadius: size.moderateScale(8),
    justifyContent: 'center',
    alignItems: 'center',
  });
  export const continuetxt = () => ({
    color:color.white,
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: fontSize.medium,
  });

  export const cancle = () => ({
 borderWidth:2.5,
 borderColor:color.orange,
  height: size.moderateScale(42),
  borderRadius: size.moderateScale(8),
  justifyContent: 'center',
  alignItems: 'center',
  });
  export const cancletxt = () => ({
    color:color.semiorange,
    fontFamily: fonts.PoppinsSemiBold,
    fontSize: fontSize.large,
  });
  export const downtxt = () => ({
    color:color.white,
    fontFamily: fonts.PoppinsMedium,
    fontSize: fontSize.large,
  });
