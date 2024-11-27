import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={20}
    height={20}
    viewBox="0 0 20 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M19 10C19 5.02943 14.9705 1 10 1C5.02943 1 1 5.02943 1 10C1 14.9705 5.02943 19 10 19C14.9705 19 19 14.9705 19 10Z"
      stroke="white"
      strokeOpacity={0.75}
      strokeWidth={1.5}
    />
    <Path
      d="M10.218 14.5V9.99998C10.218 9.57572 10.218 9.36359 10.0861 9.23174C9.95438 9.09998 9.74225 9.09998 9.31799 9.09998"
      stroke="white"
      strokeOpacity={0.75}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M9.9928 6.40002H10"
      stroke="white"
      strokeOpacity={0.75}
      strokeWidth={2}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
  </Svg>
);
export default SVGComponent;
