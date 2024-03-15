import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Graycross = (props) => (
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
      d="m1 13.5 12-12m-12 0 12 12"
    />
  </Svg>
)
export default Graycross
