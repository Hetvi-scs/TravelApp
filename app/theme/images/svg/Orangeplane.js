import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Orangeplane = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#EA6300"
      d="M1.5 23.5v-2.667h24V23.5h-24Zm2.467-6.667-3.8-6.466 2.066-.4 2.334 2.066 6.4-1.733-5.4-9.133 2.6-.8 9.133 8.2 6.667-1.8c.71-.2 1.355-.067 1.933.4.578.466.867 1.089.867 1.866 0 .49-.15.923-.45 1.3-.301.378-.684.634-1.15.767l-21.2 5.733Z"
    />
  </Svg>
);
export default Orangeplane;
