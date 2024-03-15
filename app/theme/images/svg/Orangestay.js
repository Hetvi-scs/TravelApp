import * as React from "react"
import Svg, { SvgProps, G, Path, Defs, ClipPath } from "react-native-svg"
const Orangestay = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <G fill="#EA6300" clipPath="url(#a)">
      <Path d="M16.84 7.269a.619.619 0 0 0-.677 0L4.255 15.024l.676 1.272 11.57-7.535 11.57 7.536.676-1.273-4.246-2.764V8.642a.78.78 0 0 0-.195-.522.636.636 0 0 0-.471-.216h-2a.636.636 0 0 0-.472.216.78.78 0 0 0-.195.522v1.444L16.839 7.27Z" />
      <Path
        fillRule="evenodd"
        d="m16.5 10.119-9.333 5.905v10.333H3.833a.636.636 0 0 0-.471.216.78.78 0 0 0-.195.522c0 .196.07.384.195.522a.636.636 0 0 0 .471.216h24a.636.636 0 0 0 .472-.216.78.78 0 0 0 .195-.522.78.78 0 0 0-.195-.522.636.636 0 0 0-.472-.216h-2V16.024L16.5 10.119Zm2.667 16.238v-8.119h4v8.12h-4Zm-2-8.119H9.833v4.429h7.334v-4.429Z"
        clipRule="evenodd"
      />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M.5.5h32v32H.5z" />
      </ClipPath>
    </Defs>
  </Svg>
)
export default Orangestay
