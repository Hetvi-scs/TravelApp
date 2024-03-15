import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const Orangemytrips = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G clipPath="url(#a)">
      <Path
        fill="#EA6300"
        d="M3.672 21.153h16.86c1.026 0 1.795-.273 2.305-.819.51-.546.765-1.368.765-2.467V7.385c0-1.106-.255-1.93-.765-2.472S21.558 4.1 20.532 4.1H3.672c-1.02 0-1.787.27-2.3.813-.514.542-.77 1.366-.77 2.472v10.482c0 1.099.256 1.921.77 2.467.513.546 1.28.819 2.3.819ZM7.059 5.037H8.6V3.13c0-.41.106-.725.318-.948.212-.223.514-.334.904-.334h4.56c.385 0 .683.111.895.334.212.223.318.539.318.948v1.885h1.54V3.248c0-1.012-.239-1.76-.716-2.246-.476-.484-1.165-.727-2.066-.727h-4.51c-.848 0-1.524.243-2.027.727-.504.485-.756 1.234-.756 2.246v1.789Z"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.602.275h23v23h-23z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Orangemytrips
