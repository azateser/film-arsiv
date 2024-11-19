import * as React from "react";
import Svg, { G, Path, Defs, ClipPath, Rect } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={12}
    height={12}
    viewBox="0 0 12 12"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <G clipPath="url(#clip0_41_435)">
      <Path
        d="M11 6C11 8.7614 8.7614 11 6 11C3.23857 11 1 8.7614 1 6C1 3.23857 3.23857 1 6 1C8.7614 1 11 3.23857 11 6Z"
        stroke="#DBFA3A"
        strokeWidth={0.7}
      />
      <Path
        d="M5.85385 4.67447C5.941 4.60851 6.059 4.60851 6.14615 4.67447L7.2725 5.527C7.35965 5.59295 7.3961 5.70985 7.3628 5.8166L6.9326 7.19605C6.8993 7.30275 6.80385 7.375 6.69615 7.375H5.30385C5.19615 7.375 5.1007 7.30275 5.0674 7.19605L4.63718 5.8166C4.6039 5.70985 4.64036 5.59295 4.72749 5.527L5.85385 4.67447Z"
        stroke="#DBFA3A"
        strokeWidth={0.7}
      />
      <Path
        d="M6 4.5V2.5M7.5 5.5L9.5 4.75M7 7.5L8 9M5 7.25L4 8.5M4.5 5.75L2.5 5.25"
        stroke="#DBFA3A"
        strokeWidth={0.7}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.5 1.25L6.00825 2.3112L7.5 1.25M1 6.3999L2.59827 5.2194L1.77774 3.36022M9.73515 9.42655L7.8079 9.07775L7.13275 11M10.0149 3.09793L9.40175 4.69489L11 5.87535M4.00496 10.7029L4.02571 8.58325L2.00166 8.605"
        stroke="#DBFA3A"
        strokeWidth={0.7}
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_41_435">
        <Rect width={12} height={12} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
