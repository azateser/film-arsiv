import * as React from "react";
import Svg, { Path } from "react-native-svg";
const SVGComponent = (props) => (
  <Svg
    width={18}
    height={20}
    viewBox="0 0 18 20"
    fill="none"
    xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <Path
      d="M8.2 1C4.80588 1 3.10883 1 2.05441 2.01587C1 3.03173 1 4.66674 1 7.93678V15.3827C1 17.458 1 18.4956 1.69557 18.8671C3.04252 19.5863 5.56912 17.1867 6.769 16.4642C7.46488 16.0451 7.81282 15.8356 8.2 15.8356C8.58718 15.8356 8.93512 16.0451 9.631 16.4642C10.8309 17.1867 13.3574 19.5863 14.7045 18.8671C15.4 18.4956 15.4 17.458 15.4 15.3827V10.45"
      stroke="white"
      strokeOpacity={0.75}
      strokeWidth={1.5}
      strokeLinecap="round"
      strokeLinejoin="round"
    />
    <Path
      d="M1.44995 5.5H7.29995"
      stroke="white"
      strokeOpacity={0.75}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
    <Path
      d="M13.6 8.2V1M10 4.6H17.2"
      stroke="white"
      strokeOpacity={0.75}
      strokeWidth={1.5}
      strokeLinecap="round"
    />
  </Svg>
);
export default SVGComponent;
