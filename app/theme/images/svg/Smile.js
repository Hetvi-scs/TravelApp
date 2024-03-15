import * as React from "react"
import Svg, { G, Path, Defs, ClipPath } from "react-native-svg"
const Smile = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#0B929E"
        d="M18.924 3.575a10.5 10.5 0 1 0-14.849 14.85 10.5 10.5 0 1 0 14.85-14.85ZM8.124 8.75a1.125 1.125 0 1 1 0 2.25 1.125 1.125 0 0 1 0-2.25Zm7.86 4.977C15.423 15.616 13.632 17 11.503 17s-3.92-1.384-4.487-3.273a.375.375 0 0 1 .367-.477h8.236a.375.375 0 0 1 .367.477ZM14.875 11a1.125 1.125 0 1 1 .001-2.25 1.125 1.125 0 0 1 0 2.25Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h23v22H0z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Smile
