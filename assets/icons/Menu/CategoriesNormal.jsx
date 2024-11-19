import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SVGComponent = props => (
  <Svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M6.25 10.5C8.59721 10.5 10.5 8.59721 10.5 6.25C10.5 3.90279 8.59721 2 6.25 2C3.90279 2 2 3.90279 2 6.25C2 8.59721 3.90279 10.5 6.25 10.5Z'
      stroke='#7D8089'
      strokeWidth={1.5}
    />
    <Path
      d='M17.75 22C20.0972 22 22 20.0972 22 17.75C22 15.4028 20.0972 13.5 17.75 13.5C15.4028 13.5 13.5 15.4028 13.5 17.75C13.5 20.0972 15.4028 22 17.75 22Z'
      stroke='#7D8089'
      strokeWidth={1.5}
    />
    <Path
      d='M6.25 22C8.59721 22 10.5 20.0972 10.5 17.75C10.5 15.4028 8.59721 13.5 6.25 13.5C3.90279 13.5 2 15.4028 2 17.75C2 20.0972 3.90279 22 6.25 22Z'
      stroke='#7D8089'
      strokeWidth={1.5}
    />
    <Path
      d='M22 6.00013L14 6'
      stroke='#7D8089'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
export default SVGComponent
