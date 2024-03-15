import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const Emi = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="M8 5.499a1 1 0 1 0 0 2h8a1 1 0 1 0 0-2H8Zm0 4a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H8Zm-1 5a1 1 0 0 1 1-1h8a1 1 0 1 1 0 2H8a1 1 0 0 1-1-1Zm1 3a1 1 0 1 0 0 2h8a1 1 0 0 0 0-2H8Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={16}
        x2={3.757}
        y1={17.749}
        y2={11.37}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0B929E" />
        <Stop offset={1} stopColor="#595C8F" stopOpacity={0.26} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default Emi
