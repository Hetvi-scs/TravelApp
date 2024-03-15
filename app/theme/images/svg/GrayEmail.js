import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const GrayEmail = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#777"
      d="M10 2H2c-.55 0-.995.45-.995 1L1 9c0 .55.45 1 1 1h8c.55 0 1-.45 1-1V3c0-.55-.45-1-1-1Zm0 2L6 6.5 2 4V3l4 2.5L10 3v1Z"
    />
  </Svg>
);
export default GrayEmail;
