export const Main = () => ({
  alignItems: 'center',
  justifyContent: 'center',
  height: size.deviceHeight,
});

export const lotti = () => ({
  aspectRatio: 1,
  height: 100,
  width: 100,
  justifyContent: 'center',
});

export const view = () => ({
  width: size.moderateScale(50),
  height: size.moderateScale(50),
  marginLeft: size.moderateScale(23),
  aligsnItems: 'center',
  jutifyContent: 'center',
  position: 'absolute',
});

export const margin = () => ({marginVertical: size.moderateScale(30)});

export const txt = () => ({
  fontSize: fontSize.medium,
  color: color.black,
  fontFamily: fonts.PoppinsMedium,
});

export const view1 = () => ({
  width: size.moderateScale(212),
  justifyContent: 'center',
});

export const txt2 = () => ({
  textAlign: 'center',
  fontSize: fontSize.small,
  fontFamily: fonts.PoppinsMedium,
  color: color.gray,
});
