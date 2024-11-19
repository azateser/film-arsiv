import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const EyeOnAUTHIcon = props => (
  <Svg
    width={20}
    height={20}
    viewBox='0 0 18 18'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M16.158 8.28375C16.386 8.60348 16.5 8.76338 16.5 9C16.5 9.23662 16.386 9.39652 16.158 9.71625C15.1334 11.1529 12.5169 14.25 9 14.25C5.48309 14.25 2.86657 11.1529 1.84203 9.71625C1.61401 9.39652 1.5 9.23662 1.5 9C1.5 8.76338 1.61401 8.60348 1.84203 8.28375C2.86657 6.84708 5.48309 3.75 9 3.75C12.5169 3.75 15.1334 6.84708 16.158 8.28375Z'
      stroke='#141B34'
      strokeOpacity={0.75}
      strokeWidth={1.5}
    />
    <Path
      opacity={0.4}
      d='M11.25 9C11.25 7.75732 10.2427 6.75 9 6.75C7.75732 6.75 6.75 7.75732 6.75 9C6.75 10.2427 7.75732 11.25 9 11.25C10.2427 11.25 11.25 10.2427 11.25 9Z'
      stroke='#141B34'
      strokeOpacity={0.75}
      strokeWidth={1.5}
    />
  </Svg>
)
export default EyeOnAUTHIcon
