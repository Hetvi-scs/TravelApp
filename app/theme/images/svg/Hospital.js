import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Hospital = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    fill="none"
    {...props}
  >
    <Path
      fill="#777"
      d="M24.5 24.667a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm2-12h-3.333V16h5.946L26.5 12.667Zm-18 12a2 2 0 1 0 0-4 2 2 0 0 0 0 4Zm18.667-14 4 5.333v6.667H28.5a4 4 0 1 1-8 0h-8a4 4 0 1 1-8 0H1.833V8A2.657 2.657 0 0 1 4.5 5.333h18.667v5.334h4ZM11.167 8v4h-4v2.667h4v4h2.666v-4h4V12h-4V8h-2.666Z"
    />
  </Svg>
)
export default Hospital
