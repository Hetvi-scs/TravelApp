import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const GrayClock = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#666"
      d="M7 0a7 7 0 1 0 0 14A7 7 0 0 0 7 0Zm2.94 9.94L6.3 7.7V3.5h1.05v3.64l3.15 1.89-.56.91Z"
    />
  </Svg>
);
export default GrayClock;
