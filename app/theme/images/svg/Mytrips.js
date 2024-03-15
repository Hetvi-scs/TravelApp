
import * as React from "react"
import Svg, { Mask, Path, G } from "react-native-svg"
const MyTrips = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Mask
      id="a"
      width={18}
      height={16}
      x={0}
      y={2}
      maskUnits="userSpaceOnUse"
      style={{
        maskType: "luminance",
      }}
    >
      <Path
        fill="#fff"
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m3.375 9-1.5-1.5s-.525 1.773-.404 2.842c.122 1.069 1.257 1.873 2.279 1.283C4.772 11.035 16.5 3.75 16.5 3.75L13.125 3l-9.75 6Z"
      />
      <Path
        stroke="#fff"
        strokeLinecap="round"
        strokeLinejoin="round"
        strokeWidth={1.5}
        d="m9.75 4.875-5.7-.606L3 4.875 5.625 7.5m5.25 9-1.5-1.875h6.375v-1.5M12 10.5l1.5 1.875H7.125v1.5"
      />
    </Mask>
    <G mask="url(#a)">
      <Path fill="#777" d="M0 0h18v18H0V0Z" />
    </G>
  </Svg>
)
export default MyTrips
