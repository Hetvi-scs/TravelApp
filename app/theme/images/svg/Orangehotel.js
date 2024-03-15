import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Orangehotel = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#EA6300"
      d="M26.833 21.833H.167v-2.37H1.5V1.685c0-.314.14-.616.39-.838C2.14.625 2.48.5 2.834.5H21.5c.354 0 .693.125.943.347.25.222.39.524.39.838v5.926H25.5v11.852h1.333v2.37Zm-6.666-2.37h2.666V9.981h-8v9.482H17.5v-7.111h2.667v7.111Zm0-11.852v-4.74h-16v16.592h8V7.611h8ZM6.833 9.981H9.5v2.37H6.833v-2.37Zm0 4.741H9.5v2.37H6.833v-2.37Zm0-9.481H9.5v2.37H6.833v-2.37Z"
    />
  </Svg>
)
export default Orangehotel
