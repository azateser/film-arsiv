import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SVGComponent = props => (
  <Svg
    width={34}
    height={34}
    viewBox='0 0 34 34'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.4298 10.4593C10.918 9.97107 11.7094 9.9711 12.1975 10.4593L23.5113 21.773C23.9994 22.2612 23.9994 23.0525 23.5113 23.5407C23.0231 24.0289 22.2317 24.0289 21.7435 23.5407L10.4298 12.227C9.94162 11.7389 9.9416 10.9474 10.4298 10.4593Z'
      fill='white'
    />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M10.4298 23.5407C9.9416 23.0526 9.94162 22.2611 10.4298 21.773L21.7435 10.4593C22.2317 9.97108 23.0231 9.97108 23.5113 10.4593C23.9994 10.9475 23.9994 11.7388 23.5113 12.227L12.1975 23.5407C11.7094 24.0289 10.918 24.0289 10.4298 23.5407Z'
      fill='white'
    />
  </Svg>
)
export default SVGComponent
