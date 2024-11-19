import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function PasswordAUTHIcon(props) {
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
        d='M4.268 18.845c.225 1.67 1.608 2.979 3.292 3.056 1.416.065 2.855.099 4.44.099 1.585 0 3.024-.034 4.44-.1 1.684-.076 3.067-1.385 3.292-3.055.147-1.09.268-2.207.268-3.345 0-1.138-.121-2.255-.268-3.345-.225-1.67-1.608-2.979-3.292-3.056A95.434 95.434 0 0012 9c-1.585 0-3.024.034-4.44.1-1.684.076-3.067 1.385-3.292 3.055C4.12 13.245 4 14.362 4 15.5c0 1.138.121 2.255.268 3.345z'
        stroke='#141B34'
        strokeWidth={1.5}
      />
      <Path
        d='M7.5 9V6.5a4.5 4.5 0 019 0V9'
        stroke='#141B34'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        opacity={0.4}
        d='M16 15.49v.01M12 15.49v.01M8 15.49v.01'
        stroke='#141B34'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
    </Svg>
  )
}

export default PasswordAUTHIcon
