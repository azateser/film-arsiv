import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function GoBackAUTHIcon(props) {
  return (
    <Svg
      width={24}
      height={24}
      viewBox='0 0 24 24'
      fill='none'
      xmlns='http://www.w3.org/2000/svg'
      {...props}
    >
      <Path
        d='M4 13h16M9 18s-5-3.682-5-5 5-5 5-5'
        stroke='#fff'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export default GoBackAUTHIcon
