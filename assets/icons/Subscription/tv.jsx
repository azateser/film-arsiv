import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SVGComponent = props => (
  <Svg
    width={12}
    height={12}
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M7 1.5H5C3.11438 1.5 2.17158 1.5 1.58579 2.08578C1 2.67157 1 3.61438 1 5.5C1 7.3856 1 8.32845 1.58579 8.9142C2.17158 9.5 3.11438 9.5 5 9.5H7C8.8856 9.5 9.82845 9.5 10.4142 8.9142C11 8.32845 11 7.3856 11 5.5C11 3.61438 11 2.67157 10.4142 2.08578C9.82845 1.5 8.8856 1.5 7 1.5Z'
      stroke='#DBFA3A'
      strokeLinecap='round'
    />
    <Path
      d='M8.45 7.75C8.45 7.30815 8.80815 6.95 9.25 6.95M6.85 7.75C6.85 6.4245 7.9245 5.35 9.25 5.35M5.25 7.75C5.25 5.54085 7.04085 3.75 9.25 3.75'
      stroke='#DBFA3A'
      strokeLinecap='round'
    />
    <Path
      d='M9 9.5L9.5 10.5'
      stroke='#DBFA3A'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M3 9.5L2.5 10.5'
      stroke='#DBFA3A'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
export default SVGComponent
