import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const TrustedPart = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#777"
      d="M12.541 6.125a4.375 4.375 0 1 0-6.858 3.6L3.792 13l1.41.058.755 1.192 2.166-3.752.043.002.044-.002 2.166 3.752.77-1.166L12.541 13l-1.89-3.275a4.369 4.369 0 0 0 1.89-3.6Zm-7.5 0a3.125 3.125 0 1 1 6.25 0 3.125 3.125 0 0 1-6.25 0Z"
    />
    <Path
      fill="#777"
      d="M8.166 8a1.875 1.875 0 1 0 0-3.75 1.875 1.875 0 0 0 0 3.75Z"
    />
  </Svg>
);
export default TrustedPart;
