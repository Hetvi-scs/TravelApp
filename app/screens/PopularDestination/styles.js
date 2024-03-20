import {color, size} from '../../theme';

export const mainview1 = () => ({backgroundColor: color.white, flex: 1});
export const mainview = () => ({
  width: size.deviceWidth,
  marginVertical: size.moderateScale(10),
});

export const scroll = () => ({
  height: size.deviceHeight - size.moderateScale(160),
});

export const marg = () => ({marginVertical: size.moderateScale(10)});
