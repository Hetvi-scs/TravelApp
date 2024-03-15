import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const Location = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#777"
      d="M4.667.286c-2.212 0-4 1.788-4 4 0 3 4 7.428 4 7.428s4-4.428 4-7.428c0-2.212-1.79-4-4-4Zm0 5.428a1.43 1.43 0 1 1 0-2.858 1.43 1.43 0 0 1 0 2.858Z"
    />
  </Svg>
);
export default Location;
