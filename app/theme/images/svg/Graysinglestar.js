import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Graysinglestar = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#494949"
      d="M1.535 7.758c.148.112.335.072.558-.09L4 6.27l1.91 1.398c.222.162.406.202.557.09.148-.112.18-.295.09-.558l-.752-2.241 1.923-1.383c.224-.159.314-.325.256-.505-.058-.173-.227-.259-.504-.255l-2.36.014L4.402.579c-.086-.267-.216-.4-.403-.4-.184 0-.314.133-.4.4L2.882 2.83l-2.36-.014c-.277-.004-.446.082-.504.255-.06.18.033.346.256.505l1.924 1.383-.753 2.24c-.09.264-.058.447.09.559Z"
    />
  </Svg>
)
export default Graysinglestar
