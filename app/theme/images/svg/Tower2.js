import * as React from "react"
import Svg, { SvgProps, G, Path } from "react-native-svg"
const Tower2 = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G stroke="#F7F7F7" strokeMiterlimit={10} opacity={0.1}>
      <Path d="M72 71.363v1.58h-1.581" opacity={0.1} />
      <Path
        strokeDasharray="5.77 5.77"
        d="M67.333 72.934H8.093"
        opacity={0.1}
      />
      <Path d="M6.58 72.944H5v-1.58" opacity={0.1} />
      <Path strokeDasharray="5.77 5.77" d="M5 68.314V9.074" opacity={0.1} />
      <Path d="M5 7.58V6h1.58" opacity={0.1} />
      <Path strokeDasharray="5.77 5.77" d="M9.601 6h59.24" opacity={0.1} />
      <Path d="M70.419 6h1.58v1.58" opacity={0.1} />
      <Path strokeDasharray="5.77 5.77" d="M72 10.645v59.244" opacity={0.1} />
    </G>
    <Path
      fill="#fff"
      d="m22.179 49.503 11.33-7.456 11.323 7.456-11.324-34.77-11.33 34.77ZM27.956 25.832l-12.646 4.47 9.91 3.433 2.736-7.903ZM51.631 30.302l-12.645-4.47 2.736 7.903 9.909-3.433Z"
    />
  </Svg>
)
export default Tower2
