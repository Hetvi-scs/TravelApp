import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
import {color, size} from '../..';
const Orangeplane = props => (
  <Svg
    width={props.width ?? 30}
    height={props.height ?? 30}
    viewBox="0 0 27 24"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}>
    <Path
      d="M1.5 23.5v-2.667h24V23.5h-24zm2.467-6.667l-3.8-6.466 2.066-.4 2.334 2.066 6.4-1.733-5.4-9.133 2.6-.8 9.133 8.2 6.667-1.8c.71-.2 1.355-.067 1.933.4.578.466.867 1.089.867 1.866 0 .49-.15.923-.45 1.3-.301.378-.684.634-1.15.767l-21.2 5.733z"
      fill={props.fill ?? color.black}
    />
  </Svg>
);
export default Orangeplane;
