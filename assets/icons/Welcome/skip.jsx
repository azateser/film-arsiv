import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SkipSVGIcon = (props) => (
  <Svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M7 1H1L5 6L1 11H7L11 6L7 1Z"
      stroke="white"
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SkipSVGIcon;
