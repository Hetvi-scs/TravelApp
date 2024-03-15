import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Viewallarrow = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#525252"
      d="m7.09 5-5 5L.915 8.825 4.732 5 .915 1.175 2.09 0l5 5Z"
    />
  </Svg>
)
export default Viewallarrow
