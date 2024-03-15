import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Whitecheck = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#5E5E5E"
      strokeLinecap="round"
      strokeWidth={2}
      d="M1 13 13 1M1 1l12 12"
    />
  </Svg>
)
export default Whitecheck
