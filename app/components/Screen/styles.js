import {color} from '../../theme';

export const full = () => ({
  flexGrow: 1,
});
export const mainContainer = secondary => ({
  flex: 1,
  backgroundColor: secondary ? secondary : color.lightwhite,
});
export const container = (style, secondary) => [
  {
    flex: 1,
    backgroundColor: secondary ? secondary : color.lightwhite,
    overflow: 'hidden',
  },
  style,
];
