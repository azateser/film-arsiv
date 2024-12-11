import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SVGComponent = props => (
  <Svg
    width={30}
    height={30}
    viewBox='0 0 30 30'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M15 18.125V5.625M15 18.125C14.1247 18.125 12.4894 15.6321 11.875 15M15 18.125C15.8753 18.125 17.5106 15.6321 18.125 15'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M25 20.625C25 23.7275 24.3525 24.375 21.25 24.375H8.75C5.6475 24.375 5 23.7275 5 20.625'
      stroke='white'
      strokeWidth={2}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
export default SVGComponent
