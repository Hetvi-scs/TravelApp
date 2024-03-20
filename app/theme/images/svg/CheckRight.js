import * as React from "react"
import Svg, { Path } from "react-native-svg"

function CheckRight(props) {
  return (
    <Svg
      width={9}
      height={8}
      viewBox="0 0 9 8"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <Path d="M1.3 3.55L4 5.8l3.6-4.5" stroke="#fff" strokeWidth={2} />
    </Svg>
  )
}

export default CheckRight
