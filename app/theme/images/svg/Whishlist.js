import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Whishlist = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#777"
      d="m9 16.012-1.088-.99C4.05 11.52 1.5 9.203 1.5 6.376c0-2.317 1.815-4.125 4.125-4.125A4.51 4.51 0 0 1 9 3.81a4.51 4.51 0 0 1 3.375-1.56c2.31 0 4.125 1.808 4.125 4.125 0 2.828-2.55 5.145-6.412 8.648L9 16.012Z"
    />
  </Svg>
)
export default Whishlist
