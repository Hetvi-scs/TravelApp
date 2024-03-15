import * as React from "react"
import Svg, { Path } from "react-native-svg"
const SavedPayments = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      stroke="#777"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M16.5 8.572V13.5A1.5 1.5 0 0 1 15 15H5.25a1.5 1.5 0 0 1-1.5-1.5v-1.125M16.5 8.572V7.5A1.5 1.5 0 0 0 15 6h-.75m2.25 2.572h-2.25"
    />
    <Path
      stroke="#777"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.5}
      d="M14.25 6v4.875a1.5 1.5 0 0 1-1.5 1.5H3a1.5 1.5 0 0 1-1.5-1.5v-6a1.5 1.5 0 0 1 1.5-1.5h9.75a1.5 1.5 0 0 1 1.5 1.5V6Zm0 0H4.125"
    />
  </Svg>
)
export default SavedPayments
