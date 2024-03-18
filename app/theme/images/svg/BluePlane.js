import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BluePlane = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#0B929E"
      d="M10.125 0v1.125l-1.5 1.125v4.125L15 4.5V6L8.625 9.75v4.125c0 .313-.11.578-.329.797A1.082 1.082 0 0 1 7.5 15c-.313 0-.578-.11-.797-.329a1.082 1.082 0 0 1-.328-.796V9.75L0 6V4.5l6.375 1.875V2.25l-1.5-1.125V0L7.5.75 10.125 0Z"
    />
  </Svg>
);
export default BluePlane;
