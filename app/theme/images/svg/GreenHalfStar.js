import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const GreenHalfStar = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={9}
    fill="none"
    {...props}>
    <Path
      fill="#61A95F"
      d="M2.313 7.758c.147.112.335.072.558-.09L4.776 6.27l1.91 1.398c.223.162.407.202.558.09.148-.112.18-.295.09-.558l-.753-2.241 1.924-1.383c.223-.159.313-.325.256-.505-.058-.173-.227-.259-.505-.255l-2.36.014L5.18.579c-.087-.267-.216-.4-.404-.4-.183 0-.313.133-.4.4L3.66 2.83 1.3 2.816c-.277-.004-.446.082-.504.255-.061.18.032.346.256.505l1.923 1.383-.753 2.24c-.09.264-.057.447.09.559ZM4.776 5.65V1.054c.011 0 .019.007.022.029l.627 2.086c.043.147.14.209.288.205l2.18-.04c.021 0 .028 0 .032.011.004.01-.004.018-.018.029l-1.794 1.24c-.126.086-.155.197-.105.338l.717 2.06c.004.022.008.025 0 .033-.007.01-.018.003-.032-.008L4.96 5.715a.28.28 0 0 0-.184-.064Z"
    />
  </Svg>
);
export default GreenHalfStar;
