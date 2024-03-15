import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const LongRightBlueArrow = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#0B929E"
      d="M22.627 8.707a1 1 0 0 0 0-1.414L16.263.929a1 1 0 1 0-1.414 1.414L20.506 8l-5.657 5.657a1 1 0 0 0 1.414 1.414l6.364-6.364ZM.08 9h21.84V7H.08v2Z"
    />
  </Svg>
);
export default LongRightBlueArrow;
