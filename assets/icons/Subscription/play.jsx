import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
const SVGComponent = props => (
  <Svg
    width={12}
    height={12}
    viewBox='0 0 12 12'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <G clipPath='url(#clip0_41_361)'>
      <Path d='M1.25 3.75H10.75' stroke='#DBFA3A' strokeLinejoin='round' />
      <Path d='M8.5 1.25L7 3.75' stroke='#DBFA3A' strokeLinejoin='round' />
      <Path
        d='M4.99999 1.25L3.5 3.75'
        stroke='#DBFA3A'
        strokeLinejoin='round'
      />
      <Path
        d='M1.25 6C1.25 3.76083 1.25 2.64124 1.94562 1.94562C2.64124 1.25 3.76083 1.25 6 1.25C8.23915 1.25 9.35875 1.25 10.0544 1.94562C10.75 2.64124 10.75 3.76083 10.75 6C10.75 8.23915 10.75 9.35875 10.0544 10.0544C9.35875 10.75 8.23915 10.75 6 10.75C3.76083 10.75 2.64124 10.75 1.94562 10.0544C1.25 9.35875 1.25 8.23915 1.25 6Z'
        stroke='#DBFA3A'
      />
      <Path
        d='M7.47655 7.44741C7.4008 7.76076 7.04285 7.98221 6.32695 8.42511C5.63485 8.85321 5.28885 9.06731 5.00995 8.98126C4.89467 8.94566 4.78962 8.87811 4.70491 8.78501C4.5 8.55991 4.5 8.12326 4.5 7.25001C4.5 6.37676 4.5 5.94011 4.70491 5.71496C4.78962 5.62191 4.89467 5.55436 5.00995 5.51876C5.28885 5.43271 5.63485 5.64681 6.32695 6.07491C7.04285 6.51781 7.4008 6.73926 7.47655 7.05261C7.5078 7.18196 7.5078 7.31806 7.47655 7.44741Z'
        stroke='#DBFA3A'
        strokeLinejoin='round'
      />
    </G>
    <Defs>
      <ClipPath id='clip0_41_361'>
        <Rect width={12} height={12} fill='white' />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SVGComponent
