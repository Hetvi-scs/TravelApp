import * as React from 'react';
import Svg, {Rect, Path} from 'react-native-svg';
const Filter = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}>
    <Rect
      width={26.261}
      height={26.333}
      x={1.239}
      y={0.5}
      stroke="#DBDBDB"
      rx={13.13}
    />
    <Path
      fill="#616161"
      d="M7.915 8.342C9.6 10.5 12.707 14.5 12.707 14.5v5c0 .458.375.833.833.833h1.667a.836.836 0 0 0 .833-.833v-5s3.1-4 4.784-6.158A.831.831 0 0 0 20.165 7H8.574a.831.831 0 0 0-.659 1.342Z"
    />
  </Svg>
);
export default Filter;
