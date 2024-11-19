import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M11 6.97357L9.36179 10.25H2.6382L1 6.97357L1.89443 6.52637L3.25623 9.24997H8.74379L10.1056 6.52637L11 6.97357Z"
      fill="#DBFA3A"
    />
    <Path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M6.50004 1.75V5.54285L7.14649 4.89635L7.85364 5.60345L6.00004 7.45715L4.14648 5.60345L4.85361 4.89635L5.50004 5.54285V1.75H6.50004Z"
      fill="#DBFA3A"
    />
  </Svg>
);
export default SVGComponent;
