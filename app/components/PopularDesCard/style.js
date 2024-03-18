import {color, fontSize, fonts, size} from '../../theme';

export const mainimage = () => ({
  backgroundColor: color.white,
    backgroundColor: 'rgb(160, 242, 155)',
  height: size.moderateScale(300),
  borderRadius: size.moderateScale(8),
  marginHorizontal: size.moderateScale(25),
  flexDirection: 'row',
  //   justifyContent: 'center',
  //   alignItems: 'center',
});
export const bigimage = () => ({
  height: size.moderateScale(139),
  width: size.moderateScale(105),
  borderRadius: size.moderateScale(6),
});
export const bigimageview = () => ({
  marginVertical: size.moderateScale(12),
  marginHorizontal: size.moderateScale(7),
});
export const fourimageview = () => ({
  height: size.moderateScale(138),
  width: size.moderateScale(218),
  marginVertical: size.moderateScale(12),
});
export const firstview = () => ({
  marginRight: size.moderateScale(1),
});
export const secondview = () => ({
  marginHorizontal: size.moderateScale(5),
});
export const thirdview = () => ({
  // marginHorizontal:size.moderateScale(2),
  marginRight: size.moderateScale(1),
  flexDirection: 'row',
});
export const fourthview = () => ({
  marginHorizontal: size.moderateScale(5),
  flexDirection: 'row',
  justifyContent: 'center',
});
export const firsttwoimg = () => ({
  flexDirection: 'row',
});
export const secondtwoimg = () => ({
  flexDirection: 'row',
  marginVertical: size.moderateScale(5),
});
export const oneimg = () => ({
  height: size.moderateScale(66),
  width: size.moderateScale(98),
  borderRadius: size.moderateScale(6),
});
export const twoimg = () => ({
  height: size.moderateScale(66),
  width: size.moderateScale(98),
  borderRadius: size.moderateScale(6),
});
export const threeimg = () => ({
  height: size.moderateScale(66),
  width: size.moderateScale(98),
  borderRadius: size.moderateScale(6),
});
export const imgtxt = () => ({
  color: color.white,
  fontFamily: fonts.PoppinsBold,
  fontSize: fontSize.large,
});
export const imgtxtview = () => ({
  position: 'absolute',
  alignItems: 'center',
  justifyContent: 'center',
  backgroundColor: 'rgba(0, 0, 0, 0.5)',
  height: size.moderateScale(66),
  width: size.moderateScale(98),
});
