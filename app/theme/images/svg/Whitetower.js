import * as React from 'react';
import Svg, {SvgProps, Path} from 'react-native-svg';
const Whitetower = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={35}
    height={35}
    fill="none"
    {...props}>
    <Path
      fill="#fff"
      d="m.179 35.503 11.33-7.456 11.323 7.456L11.508.733.178 35.502Z"
    />
  </Svg>
);
export default Whitetower;
