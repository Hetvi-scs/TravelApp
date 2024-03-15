import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Sharegray = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#777"
      fillRule="evenodd"
      d="M11.13 11.19a2.25 2.25 0 1 1-.6 1.2l-3.655-1.833a2.25 2.25 0 1 1 0-3.113l3.654-1.833a2.25 2.25 0 1 1 .6 1.2L7.472 8.639c.038.24.038.483 0 .722l3.657 1.828v.001ZM12.75 6a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm0 7.5a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Zm-7.5-3.75a.75.75 0 1 0 0-1.5.75.75 0 0 0 0 1.5Z"
      clipRule="evenodd"
    />
  </Svg>
)
export default Sharegray
