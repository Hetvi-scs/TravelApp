import * as React from 'react';
import Svg, {G, Path, Defs, ClipPath} from 'react-native-svg';
const GrayCalender = props => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}>
    <G fill="#666" clipPath="url(#a)">
      <Path d="M12.542 2.333h-1.556V3.5a.855.855 0 1 1-1.711 0V2.333h-4.53V3.5a.856.856 0 0 1-1.712 0V2.333H1.478a.692.692 0 0 0-.7.704v8.704a.692.692 0 0 0 .68.703h11.084a.692.692 0 0 0 .68-.703V3.037a.692.692 0 0 0-.68-.704Zm-8.653 7.778H3.11v-.778h.778v.778Zm0-1.944H3.11v-.778h.778v.778Zm0-1.945H3.11v-.778h.778v.778Zm2.333 3.89h-.778v-.779h.778v.778Zm0-1.945h-.778v-.778h.778v.778Zm0-1.945h-.778v-.778h.778v.778Zm2.334 3.89h-.778v-.779h.778v.778Zm0-1.945h-.778v-.778h.778v.778Zm0-1.945h-.778v-.778h.778v.778Zm2.333 3.89h-.778v-.779h.778v.778Zm0-1.945h-.778v-.778h.778v.778Zm0-1.945h-.778v-.778h.778v.778Z" />
      <Path d="M3.889 3.889a.389.389 0 0 0 .389-.389V1.167a.389.389 0 1 0-.778 0V3.5a.389.389 0 0 0 .389.389ZM10.111 3.889A.389.389 0 0 0 10.5 3.5V1.167a.389.389 0 0 0-.778 0V3.5a.389.389 0 0 0 .39.389Z" />
    </G>
    <Defs>
      <ClipPath id="a">
        <Path fill="#fff" d="M0 0h14v14H0z" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default GrayCalender;
