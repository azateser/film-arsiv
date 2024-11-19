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
    <G clipPath="url(#clip0_41_447)">
      <Path
        d="M3.5 1.25C2.79634 1.33268 2.31213 1.50744 1.94562 1.87681C1.25 2.57787 1.25 3.70621 1.25 5.9629C1.25 8.21955 1.25 9.3479 1.94562 10.049C2.64124 10.75 3.76083 10.75 6 10.75C8.23915 10.75 9.35875 10.75 10.0544 10.049C10.75 9.3479 10.75 8.21955 10.75 5.9629C10.75 3.70621 10.75 2.57787 10.0544 1.87681C9.68785 1.50744 9.20365 1.33268 8.5 1.25"
        stroke="#DBFA3A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M4.75 4C4.99577 4.25285 5.6499 5.25 6 5.25M6 5.25C6.3501 5.25 7.00425 4.25285 7.25 4M6 5.25V1.25"
        stroke="#DBFA3A"
        strokeLinecap="round"
        strokeLinejoin="round"
      />
      <Path
        d="M10.75 6.75H8.28715C7.8661 6.75 7.5353 7.1018 7.34975 7.4736C7.14815 7.87755 6.74445 8.25 6 8.25C5.25555 8.25 4.85186 7.87755 4.65027 7.4736C4.46471 7.1018 4.13389 6.75 3.71283 6.75H1.25"
        stroke="#DBFA3A"
        strokeLinejoin="round"
      />
    </G>
    <Defs>
      <ClipPath id="clip0_41_447">
        <Rect width={12} height={12} fill="white" />
      </ClipPath>
    </Defs>
  </Svg>
);
export default SVGComponent;
