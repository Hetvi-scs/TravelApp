import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Smallcheck = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path stroke="#fff" strokeWidth={2} d="M1.3 3.55 4 5.8l3.6-4.5" />
  </Svg>
)
export default Smallcheck
