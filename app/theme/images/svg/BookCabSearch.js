import * as React from 'react';
import Svg, {Path} from 'react-native-svg';
const BookCabSearch = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <Path
      fill="#666"
      d="M11.048 10.074 14 13.024l-.975.976-2.951-2.952A6.205 6.205 0 0 1 0 6.202 6.205 6.205 0 0 1 6.203 0a6.205 6.205 0 0 1 4.845 10.074Zm-1.382-.512a4.823 4.823 0 0 0-3.463-8.184 4.823 4.823 0 0 0-4.825 4.825 4.823 4.823 0 0 0 8.184 3.463l.104-.104Z"
    />
  </Svg>
);
export default BookCabSearch;
