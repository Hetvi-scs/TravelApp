import * as React from "react"
import Svg, { Path } from "react-native-svg"
const Totalpay = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#595959"
      d="M5.25 9c1.65 0 3-1.35 3-3s-1.35-3-3-3-3 1.35-3 3 1.35 3 3 3Zm3 6v-3.975a8.938 8.938 0 0 0-3-.525c-2.925 0-5.25 1.35-5.25 3V15h8.25ZM16.5 3h-5.25c-.825 0-1.5.675-1.5 1.5v9c0 .825.675 1.5 1.5 1.5h5.25c.825 0 1.5-.675 1.5-1.5v-9c0-.825-.675-1.5-1.5-1.5Zm-3 10.5H12v-9h1.5v9Z"
    />
  </Svg>
)
export default Totalpay
