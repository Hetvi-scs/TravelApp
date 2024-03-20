import {size} from '../../theme';

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
  fontFamily: 'Poppins-Medium',
  fontSize: 14,
  color: '#888',
});

export const flatlistview = () => ({
  marginTop: size.moderateScale(20),
});

export const flatline = () => ({
  height: 1,
  backgroundColor: '#ddd',
  width: '89%',
  marginHorizontal: 20,
});
