import * as React from 'react';
import Svg, {Circle} from 'react-native-svg';
const DotGray = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Circle cx={2.278} cy={2} r={1.5} fill="#545454" />
  </Svg>
);
export default DotGray;
