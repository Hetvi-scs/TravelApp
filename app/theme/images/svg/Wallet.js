import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const Wallet = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="M20.25 7.249h-15a.75.75 0 0 1 0-1.5H18a.75.75 0 1 0 0-1.5H5.25A2.25 2.25 0 0 0 3 6.499v12a2.25 2.25 0 0 0 2.25 2.25h15a1.5 1.5 0 0 0 1.5-1.5v-10.5a1.5 1.5 0 0 0-1.5-1.5Zm-3.375 7.5a1.124 1.124 0 1 1 0-2.249 1.124 1.124 0 0 1 0 2.249Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={19.875}
        x2={2.575}
        y1={18.686}
        y2={4.346}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0B929E" />
        <Stop offset={1} stopColor="#595C8F" stopOpacity={0.26} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default Wallet
