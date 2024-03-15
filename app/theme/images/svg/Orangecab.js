import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Orangecab = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#EA6300"
      d="m7.167 15.167 2-6h14.666l2 6m-2 6.666a2 2 0 1 1 0-4 2 2 0 0 1 0 4Zm-14.666 0a2 2 0 1 1 0-4 2 2 0 0 1 0 4ZM25.727 8.5a1.998 1.998 0 0 0-1.894-1.333H20.5V4.5h-8v2.667H9.167c-.88 0-1.627.56-1.894 1.333l-2.773 8v10.667A1.333 1.333 0 0 0 5.833 28.5h1.334A1.334 1.334 0 0 0 8.5 27.167v-1.334h16v1.334a1.334 1.334 0 0 0 1.333 1.333h1.334a1.334 1.334 0 0 0 1.333-1.333V16.5l-2.773-8Z"
    />
  </Svg>
)
export default Orangecab
