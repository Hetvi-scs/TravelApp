import {color, fontSize, fonts, size} from '../../theme';

export const profiletxt = () => ({
  fontSize: fontSize.extralarge,
  marginHorizontal: size.moderateScale(20),
  marginTop: size.moderateScale(20),
  fontFamily: fonts.PoppinsSemiBold,
  color: color.black,
});

export const imgview = () => ({
  marginHorizontal: size.moderateScale(20),
  marginTop: size.moderateScale(10),
  flexDirection: 'row',
});

export const imgstyle = () => ({
  height: size.moderateScale(62),
  width: size.moderateScale(62),
  borderRadius: 30,
});

export const nametxt = () => ({
  marginTop: size.moderateScale(10),
  marginLeft: size.moderateScale(10),
  fontFamily: fonts.PoppinsSemiBold,
  color: color.black,
  fontSize: fontSize.medium,
});

export const showprofile=()=>({
    marginLeft: size.moderateScale(10),
    fontFamily: fonts.PoppinsRegular,
    color: color.lightgray,
    fontSize: fontSize.extrasmall,
})

export const svgview=()=>({
    marginTop: size.moderateScale(15)
})

export const line=()=>({
    height: 0.25,
    backgroundColor: color.lightgray,
    marginTop: size.moderateScale(15),
    marginHorizontal: size.moderateScale(20),
})

export const flatlistview=()=>({
    marginTop: 20
})