import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SVGComponent = props => (
  <Svg
    width={32}
    height={32}
    viewBox='0 0 32 32'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M15.9999 18.6666C17.4727 18.6666 18.6666 17.4727 18.6666 16C18.6666 14.5272 17.4727 13.3333 15.9999 13.3333C14.5272 13.3333 13.3333 14.5272 13.3333 16C13.3333 17.4727 14.5272 18.6666 15.9999 18.6666Z'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M10 10.6667C8.66667 12 8 14 8 16C8 18 8.66667 20 10 21.3334'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M6.00008 8C4.00008 10 2.66675 12.6667 2.66675 16C2.66675 19.3333 4.00008 22 6.00008 24'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M22 21.3334C23.3333 20 24 18 24 16C24 14 23.3333 12 22 10.6667'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M26 24C28 22 29.3333 19.3333 29.3333 16C29.3333 12.6667 28 10 26 8'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
export default SVGComponent
