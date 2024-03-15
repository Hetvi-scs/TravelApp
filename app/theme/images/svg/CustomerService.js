import * as React from "react"
import Svg, { Path } from "react-native-svg"
const CustomerService = (props) => (
  <Svg
    xmlns="http://www.w3.org/2000/svg"
    width={24}
    height={24}
    fill="none"
    {...props}
  >
    <Path
      fill="#777"
      d="M14.04 11.07c.263-.638.405-1.32.405-2.07 0-.54-.082-1.057-.225-1.537a6.784 6.784 0 0 1-1.53.172 6.803 6.803 0 0 1-5.565-2.88 6.908 6.908 0 0 1-3.547 3.66c-.03.188-.03.39-.03.585A5.452 5.452 0 0 0 9 14.453c.787 0 1.545-.173 2.227-.48.428.817.623 1.222.608 1.222-1.23.412-2.183.615-2.835.615a6.785 6.785 0 0 1-4.822-1.995 6.772 6.772 0 0 1-1.68-2.768H1.5V7.635h.817a6.818 6.818 0 0 1 11.498-3.45 6.743 6.743 0 0 1 1.853 3.45h.832v3.412h-.045l-2.67 2.453-3.975-.45v-1.253h3.622l.608-.727ZM6.953 8.828c.224 0 .442.09.6.255a.852.852 0 0 1 0 1.2.852.852 0 0 1-.6.247.848.848 0 0 1-.856-.847c0-.473.383-.855.855-.855Zm4.087 0c.473 0 .848.382.848.855a.842.842 0 0 1-.848.847.848.848 0 0 1-.605-1.452c.16-.16.378-.25.605-.25Z"
    />
  </Svg>
)
export default CustomerService