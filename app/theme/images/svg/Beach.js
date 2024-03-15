import * as React from "react"
import Svg, { SvgProps, Path } from "react-native-svg"
const Beach = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#EA6300"
      d="M23.82 1.403a8.796 8.796 0 0 0-12.017 3.22l-.332.574a.857.857 0 0 0 .315 1.17l6.24 3.603-3.734 6.537h-.078c-3.609 0-6.735 2.093-8.596 5.053a2.286 2.286 0 0 1 2.931 1.437c.681 2.054 3.164 1.942 3.79.122a2.285 2.285 0 0 1 4.322 0c.626 1.82 3.109 1.932 3.79-.124a2.286 2.286 0 0 1 2.279-1.563c-1.523-2.352-3.85-4.137-6.58-4.721l3.361-5.884 6.027 3.48a.857.857 0 0 0 1.171-.314l.332-.572A8.796 8.796 0 0 0 23.82 1.403ZM7.194 23.445a.857.857 0 0 0-1.646.066c-.292 1.19-.843 1.844-1.472 2.224-.658.398-1.497.55-2.433.55a.857.857 0 1 0 0 1.715c1.093 0 2.285-.174 3.319-.798a4.56 4.56 0 0 0 1.516-1.496c2.045 2.608 6.037 2.595 8.022-.027 2.017 2.663 6.103 2.635 8.118-.098A5.933 5.933 0 0 0 27.358 28a.857.857 0 0 0 0-1.714c-1.687 0-3.367-1.097-3.92-2.832a.857.857 0 0 0-1.632-.01c-1.1 3.325-5.415 3.283-6.496.139a.858.858 0 0 0-1.62 0c-1.082 3.144-5.395 3.185-6.496-.138Z"
    />
  </Svg>
)
export default Beach
