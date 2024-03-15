import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BlueDots = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}>
    <Path
      stroke="#0B929E"
      strokeDasharray="1 1"
      strokeWidth={0.5}
      d="M.25 0v19"
    />
  </Svg>
);
export default BlueDots;
