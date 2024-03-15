import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const OrangeMulticity = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#EA6300"
      d="M20.26 16.9c.4-.7.7-1.5.7-2.4 0-2.5-2-4.5-4.5-4.5s-4.5 2-4.5 4.5 2 4.5 4.5 4.5c.9 0 1.7-.3 2.4-.7l3.2 3.2 1.4-1.4-3.2-3.2Zm-3.8.1c-1.4 0-2.5-1.1-2.5-2.5s1.1-2.5 2.5-2.5 2.5 1.1 2.5 2.5-1.1 2.5-2.5 2.5Zm-3.5 3v2c-5.52 0-10-4.48-10-10s4.48-10 10-10c4.84 0 8.87 3.44 9.8 8h-2.07a8 8 0 0 0-4.73-5.41V5c0 1.1-.9 2-2 2h-2v2c0 .55-.45 1-1 1h-2v2h2v3h-1l-4.79-4.79c-.13.58-.21 1.17-.21 1.79 0 4.41 3.59 8 8 8Z"
    />
  </Svg>
)
export default OrangeMulticity
