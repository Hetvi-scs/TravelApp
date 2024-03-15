import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Biggraystar = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#000"
      d="M2.55 13.333 3.633 8.65 0 5.5l4.8-.417L6.667.667l1.866 4.416 4.8.417L9.7 8.65l1.083 4.683-4.116-2.483-4.117 2.483Z"
    />
  </Svg>
)
export default Biggraystar
