import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const LongGrayArrow = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#000"
      d="M21.354 4.854a.5.5 0 0 0 0-.708L18.172.964a.5.5 0 1 0-.707.708L20.293 4.5l-2.828 2.828a.5.5 0 1 0 .707.708l3.182-3.182ZM0 5h21V4H0v1Z"
    />
  </Svg>
);
export default LongGrayArrow;
