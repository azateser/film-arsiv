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
      d="M3 8V9.5M3 9.5V11M3 9.5H4.75M4.75 8V9.5M4.75 9.5V11"
      stroke="#DBFA3A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M7.25 11V8H8C8.5523 8 9 8.4477 9 9V10C9 10.5523 8.5523 11 8 11H7.25Z"
      stroke="#DBFA3A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M10 6.5V5.32845C10 4.91968 10 4.7153 9.9239 4.53153C9.84775 4.34776 9.70325 4.20325 9.4142 3.91422L7.04595 1.54594C6.7965 1.2965 6.6718 1.17177 6.51725 1.09787C6.4851 1.0825 6.4522 1.06886 6.4186 1.05701C6.25705 1 6.0807 1 5.7279 1C4.10541 1 3.29415 1 2.74466 1.44304C2.63365 1.53254 2.53254 1.63366 2.44303 1.74467C2 2.29416 2 3.10541 2 4.72792V6.5M6.5 1.25V1.5C6.5 2.91421 6.5 3.62132 6.93935 4.06066C7.3787 4.5 8.0858 4.5 9.5 4.5H9.75"
      stroke="#DBFA3A"
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
