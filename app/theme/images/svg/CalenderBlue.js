import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const CalenderBlue = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    CalenderBlue>
    <G fill="#0B929E" clipPath="url(#a)">
      <Path d="M13.438 2.5H11.77v1.25a.918.918 0 0 1-1.833 0V2.5H5.083v1.25a.917.917 0 0 1-1.833 0V2.5H1.583a.742.742 0 0 0-.75.754v9.325a.742.742 0 0 0 .73.754h11.874a.74.74 0 0 0 .73-.754V3.254a.742.742 0 0 0-.73-.754Zm-9.271 8.333h-.834V10h.834v.833Zm0-2.083h-.834v-.833h.834v.833Zm0-2.083h-.834v-.834h.834v.834Zm2.5 4.166h-.834V10h.834v.833Zm0-2.083h-.834v-.833h.834v.833Zm0-2.083h-.834v-.834h.834v.834Zm2.5 4.166h-.834V10h.834v.833Zm0-2.083h-.834v-.833h.834v.833Zm0-2.083h-.834v-.834h.834v.834Zm2.5 4.166h-.834V10h.834v.833Zm0-2.083h-.834v-.833h.834v.833Zm0-2.083h-.834v-.834h.834v.834Z" />
      <Path d="M4.167 4.167a.417.417 0 0 0 .416-.417v-2.5a.417.417 0 1 0-.833 0v2.5a.417.417 0 0 0 .417.417ZM10.833 4.167a.417.417 0 0 0 .417-.417v-2.5a.416.416 0 1 0-.833 0v2.5a.416.416 0 0 0 .416.417Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h15v15H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default CalenderBlue;
