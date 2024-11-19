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
      d='M6 11.0001C3.87868 11.0001 2.81802 11.0001 2.15901 10.2679C1.5 9.53566 1.5 8.35716 1.5 6.00011C1.5 3.6431 1.5 2.46459 2.15901 1.73235C2.81802 1.00012 3.87868 1.00012 6 1.00012C8.1213 1.00012 9.182 1.00012 9.841 1.73235C10.5 2.46459 10.5 3.6431 10.5 6.00011C10.5 8.35716 10.5 9.53566 9.841 10.2679C9.182 11.0001 8.1213 11.0001 6 11.0001Z'
      stroke='#DBFA3A'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M4 1.25V4.91311C4 5.53665 4 5.84845 4.19321 5.96005C4.56737 6.17615 5.2692 5.45515 5.6025 5.23805C5.7958 5.11215 5.89245 5.0492 6 5.0492C6.10755 5.0492 6.2042 5.11215 6.3975 5.23805C6.7308 5.45515 7.43265 6.17615 7.8068 5.96005C8 5.84845 8 5.53665 8 4.91311V1.25'
      stroke='#DBFA3A'
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)

export default SVGComponent
