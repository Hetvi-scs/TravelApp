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
    elevation:15
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

  export const sort = () => ({
    borderWidth:1.2,
    borderColor:color.rama,
     height: size.moderateScale(42),
     borderRadius: size.moderateScale(8),
     justifyContent: 'center',
     alignItems: 'center',
     });
     export const sorttxt = () => ({
       color:color.semiblack,
       fontFamily: fonts.PoppinsSemiBold,
       fontSize: fontSize.large,
     });

     export const male = () => ({
        backgroundColor: color.rama,
        height: size.moderateScale(43),
        justifyContent: 'center',
        alignItems: 'center',
      });
      export const maletxt = () => ({
        color:color.white,
        fontFamily: fonts.PoppinsMedium,
        fontSize: fontSize.large,
      });

      
     export const female = () => ({
        borderWidth:0.9,
        borderColor:color.gray,
        height: size.moderateScale(43),
        justifyContent: 'center',
        alignItems: 'center',
      });
      export const femaletxt = () => ({
        color:color.black,
        fontFamily: fonts.PoppinsMedium,
        fontSize: fontSize.large,
      });

      export const help = () => ({
        backgroundColor: color.rama,
        height: size.moderateScale(43),
        borderRadius: size.moderateScale(8),
        justifyContent: 'center',
        alignItems: 'center',
      });
      export const helptxt = () => ({
        color:color.white,
        fontFamily: fonts.PoppinsMedium,
        fontSize: fontSize.medium,
      });