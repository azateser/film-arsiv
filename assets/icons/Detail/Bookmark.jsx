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
      d='M10 18.3335C6.46447 18.3335 4.6967 18.3335 3.59835 17.1132C2.5 15.8928 2.5 13.9286 2.5 10.0002C2.5 6.07183 2.5 4.10764 3.59835 2.88725C4.6967 1.66687 6.46447 1.66687 10 1.66687C13.5355 1.66687 15.3033 1.66687 16.4017 2.88725C17.5 4.10764 17.5 6.07183 17.5 10.0002C17.5 13.9286 17.5 15.8928 16.4017 17.1132C15.3033 18.3335 13.5355 18.3335 10 18.3335Z'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M6.66675 2.08331V8.18849C6.66675 9.22773 6.66675 9.7474 6.98876 9.9334C7.61236 10.2936 8.78208 9.0919 9.33758 8.73006C9.65975 8.52023 9.82083 8.41531 10.0001 8.41531C10.1793 8.41531 10.3404 8.52023 10.6626 8.73006C11.2181 9.0919 12.3878 10.2936 13.0114 9.9334C13.3334 9.7474 13.3334 9.22773 13.3334 8.18849V2.08331'
      stroke='white'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
export default SVGComponent
