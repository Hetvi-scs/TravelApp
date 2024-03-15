import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const Card = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="M20 4.499H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2v-12a2 2 0 0 0-2-2Zm0 7H4v-3h16v3Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={20}
        x2={3}
        y1={18.499}
        y2={2.999}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0B929E" />
        <Stop offset={1} stopColor="#595C8F" stopOpacity={0.26} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default Card
