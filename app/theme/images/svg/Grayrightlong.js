import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Grayrightlong = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#777"
      d="M1 9a1 1 0 0 1 0-2v2Zm18.707-1.707a1 1 0 0 1 0 1.414l-6.364 6.364a1 1 0 0 1-1.414-1.414L17.586 8l-5.657-5.657A1 1 0 0 1 13.343.93l6.364 6.364ZM1 7h18v2H1V7Z"
    />
  </Svg>
)
export default Grayrightlong
