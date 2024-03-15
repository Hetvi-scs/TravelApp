import * as React from "react"
import Svg, { Path, Defs, LinearGradient, Stop } from "react-native-svg"
const Bank = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="url(#a)"
      d="M24 19.3a.8.8 0 0 1-.8.8H.8a.8.8 0 0 1 0-1.6h22.4a.8.8 0 0 1 .8.8ZM.83 8.316a.8.8 0 0 1 .351-.9l10.4-6.4a.8.8 0 0 1 .838 0l10.4 6.4A.8.8 0 0 1 22.4 8.9H20v6.4h1.6a.8.8 0 1 1 0 1.6H2.4a.8.8 0 0 1 0-1.6H4V8.9H1.6a.8.8 0 0 1-.77-.582ZM13.6 14.5a.8.8 0 1 0 1.6 0V9.7a.8.8 0 0 0-1.6 0v4.8Zm-4.8 0a.8.8 0 1 0 1.6 0V9.7a.8.8 0 0 0-1.6 0v4.8Z"
    />
    <Defs>
      <LinearGradient
        id="a"
        x1={21.6}
        x2={1.2}
        y1={17.699}
        y2={-0.901}
        gradientUnits="userSpaceOnUse"
      >
        <Stop stopColor="#0B929E" />
        <Stop offset={1} stopColor="#595C8F" stopOpacity={0.26} />
      </LinearGradient>
    </Defs>
  </Svg>
)
export default Bank
