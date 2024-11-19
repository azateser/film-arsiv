import * as React from 'react'
import Svg, { Path } from 'react-native-svg'

function RegisterAUTHIcon(props) {
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
        fillRule='evenodd'
        clipRule='evenodd'
        d='M11.193 2.667a1 1 0 01-.61 1.276l-.663.234c-1.31.463-2.215.784-2.889 1.11-.651.316-.995.597-1.23.928-.235.332-.384.75-.465 1.469-.085.744-.086 1.704-.086 3.094v2.444c0 1.39.001 2.35.086 3.095.08.719.23 1.137.465 1.468.235.332.579.612 1.23.928.674.327 1.578.648 2.89 1.11l.662.234a1 1 0 11-.666 1.886L9.2 21.69c-1.243-.439-2.255-.796-3.042-1.178-.822-.398-1.49-.865-1.99-1.572-.5-.706-.717-1.491-.82-2.399-.098-.87-.098-1.942-.098-3.26V10.72c0-1.318 0-2.39.098-3.26.103-.908.32-1.693.82-2.4.5-.707 1.168-1.173 1.99-1.572.787-.382 1.799-.739 3.042-1.178l.717-.253a1 1 0 011.276.61z'
        fill='#fff'
      />
      <Path
        d='M19.75 13.006a1 1 0 000-2h-6.5v-.594c0-.176 0-.392-.022-.568V9.84c-.016-.127-.088-.703-.653-.977-.567-.275-1.067.027-1.176.092l-.468.34c-.376.294-.89.7-1.281 1.08-.195.19-.397.407-.556.638-.14.205-.344.555-.344.986 0 .43.203.78.344.986.16.231.36.448.556.638.39.38.905.786 1.28 1.08l.47.34c.108.065.608.367 1.175.092.565-.274.637-.85.653-.976v-.004c.022-.176.022-.392.022-.568v-.582h6.5z'
        fill='#fff'
      />
    </Svg>
  )
}

export default RegisterAUTHIcon
