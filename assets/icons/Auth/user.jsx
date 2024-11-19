import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const UserAUTHIcon = props => (
  <Svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M16 7C16 9.20914 14.2091 11 12 11C9.79086 11 8 9.20914 8 7C8 4.79086 9.79086 3 12 3C14.2091 3 16 4.79086 16 7Z'
      stroke='#141B34'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M19 19C19 16.2386 16.7614 14 14 14H10C7.23858 14 5 16.2386 5 19V21H19V19Z'
      stroke='#141B34'
      strokeWidth={1.5}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
export default UserAUTHIcon
