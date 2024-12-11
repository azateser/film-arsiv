import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SVGComponent = props => (
  <Svg
    width={24}
    height={24}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M9.25017 2.5C6.20881 2.50548 4.61618 2.58014 3.59838 3.59795C2.5 4.69633 2.5 6.46415 2.5 9.99975C2.5 13.5354 2.5 15.3032 3.59838 16.4016C4.69676 17.5 6.46458 17.5 10.0003 17.5C13.5358 17.5 15.3037 17.5 16.4021 16.4016C17.4198 15.3838 17.4945 13.7912 17.5 10.7498'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M17.4997 5.02095L16.6667 5.01884C13.5529 5.01097 11.996 5.00703 10.9015 5.79375C10.5377 6.05519 10.2186 6.37358 9.95625 6.73664C9.16675 7.82917 9.16675 9.38611 9.16675 12.4999M17.4997 5.02095C17.5052 4.88543 17.4568 4.74909 17.3543 4.62765C16.7167 3.87226 15.0593 2.49988 15.0593 2.49988M17.4997 5.02095C17.4946 5.14248 17.4461 5.26334 17.3542 5.37222C16.7164 6.12746 15.0593 7.49988 15.0593 7.49988'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
export default SVGComponent
