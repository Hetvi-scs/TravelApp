import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Primarycontect = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#595959"
      fillRule="evenodd"
      d="M6 5.25a3 3 0 1 1 6 0 3 3 0 0 1-6 0Zm0 4.5a3.75 3.75 0 0 0-3.75 3.75 2.25 2.25 0 0 0 2.25 2.25h9a2.25 2.25 0 0 0 2.25-2.25A3.75 3.75 0 0 0 12 9.75H6Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Primarycontect

