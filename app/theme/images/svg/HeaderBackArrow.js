import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const HeaderBackArrow = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#5E5E5E"
      d="M14.582 7.005H3.412l4.88-4.88A1.008 1.008 0 0 0 7.97.49a.996.996 0 0 0-1.087.216l-6.59 6.59a.996.996 0 0 0 0 1.41l6.59 6.59a.997.997 0 0 0 1.41-1.41l-4.88-4.88h11.17c.55 0 1-.45 1-1s-.45-1-1-1Z"
    />
  </Svg>
);
export default HeaderBackArrow;
