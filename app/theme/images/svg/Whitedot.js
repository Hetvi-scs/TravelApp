import * as React from "react"
import Svg, { SvgProps, G, Circle, Defs } from "react-native-svg"
/* SVGR has dropped some elements not supported by react-native-svg: filter */
const Whitedot = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G filter="url(#a)">
      <Circle cx={13.25} cy={13} r={6} fill="#fff" />
      <Circle cx={13.25} cy={13} r={6.25} stroke="#CFCFCF" strokeWidth={0.5} />
    </G>
    <Defs></Defs>
  </Svg>
)
export default Whitedot
