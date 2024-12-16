import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SVGComponent = props => (
  <Svg
    width={20}
    height={20}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M5 7.50004L10 12.5L15 7.5'
      stroke='white'
      strokeWidth={1.5}
      strokeMiterlimit={16}
    />
  </Svg>
)
export default SVGComponent
