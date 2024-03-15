import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const GreenActiveStar = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#61A95F"
      d="M1.535 7.758c.147.112.335.072.558-.09L3.999 6.27l1.909 1.398c.223.162.407.202.558.09.148-.112.18-.295.09-.558l-.753-2.241 1.924-1.383c.223-.159.313-.325.256-.505-.058-.173-.227-.259-.505-.255L5.12 2.83 4.402.579c-.086-.267-.216-.4-.403-.4-.184 0-.314.133-.4.4L2.882 2.83l-2.36-.014c-.277-.004-.446.082-.504.255-.061.18.033.346.256.505l1.923 1.383-.752 2.24c-.09.264-.058.447.09.559Z"
    />
  </Svg>
);
export default GreenActiveStar;