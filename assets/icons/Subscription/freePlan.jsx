import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SVGComponent = ({ active, ...props }) => (
  <Svg
    width={72}
    height={72}
    viewBox='0 0 72 72'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M33 60H6C6 48.402 15.402 39 27 39H33C34.5447 39 36.0504 39.1668 37.5 39.4833M42 18C42 24.6274 36.6273 30 30 30C23.3726 30 18 24.6274 18 18C18 11.3726 23.3726 6 30 6C36.6273 6 42 11.3726 42 18Z'
      stroke={active ? '#141B34' : '#DBFA3A'}
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M62.2293 45.8688C57.4395 43.371 54 47.0529 54 47.0529C54 47.0529 50.5605 43.371 45.7704 45.8688C39.969 48.894 39.5523 60.7407 54 66C68.448 60.7407 68.031 48.894 62.2293 45.8688Z'
      stroke={active ? '#141B34' : '#DBFA3A'}
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
export default SVGComponent
