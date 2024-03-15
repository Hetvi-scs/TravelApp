import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const GrayContact = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#777"
      fillRule="evenodd"
      d="M4 3.5a2 2 0 1 1 4 0 2 2 0 0 1-4 0Zm0 3A2.5 2.5 0 0 0 1.5 9 1.5 1.5 0 0 0 3 10.5h6A1.5 1.5 0 0 0 10.5 9 2.5 2.5 0 0 0 8 6.5H4Z"
      clipRule="evenodd"
    />
  </Svg>
);
export default GrayContact;
