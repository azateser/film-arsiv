import * as React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'
const SVGComponent = props => (
  <Svg
    width={67}
    height={33}
    viewBox='0 0 67 33'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Rect width={67} height={33} rx={16.5} fill='#DBFA3A' fillOpacity={0.2} />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M34 5.25C28.0629 5.25 23.25 10.0629 23.25 16C23.25 21.9371 28.0629 26.75 34 26.75C39.9371 26.75 44.75 21.9371 44.75 16C44.75 10.0629 39.9371 5.25 34 5.25ZM32.6804 12.1867C31.7272 11.6761 30.5 12.273 30.5 13.2473V18.7527C30.5 19.727 31.7272 20.3239 32.6804 19.8133L37.8192 17.0606C38.7269 16.5743 38.7269 15.4257 37.8192 14.9394L32.6804 12.1867Z'
      fill='#DBFA3A'
    />
  </Svg>
)
export default SVGComponent
