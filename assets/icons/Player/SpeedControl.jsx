import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SVGComponent = props => (
  <Svg
    width={24}
    height={24}
    viewBox='0 0 24 24'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M13 10.5C13 9.94772 12.5523 9.5 12 9.5C11.4477 9.5 11 9.94772 11 10.5V15.6707C9.83481 16.0825 9 17.1938 9 18.5C9 20.1569 10.3431 21.5 12 21.5C13.6569 21.5 15 20.1569 15 18.5C15 17.1938 14.1652 16.0825 13 15.6707V10.5Z'
      fill='white'
    />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M12 4.5C7.02944 4.5 3 8.52944 3 13.5C3 14.0523 2.55228 14.5 2 14.5C1.44772 14.5 1 14.0523 1 13.5C1 7.42487 5.92487 2.5 12 2.5C18.0751 2.5 23 7.42487 23 13.5C23 14.0523 22.5523 14.5 22 14.5C21.4477 14.5 21 14.0523 21 13.5C21 8.52944 16.9706 4.5 12 4.5Z'
      fill='white'
    />
  </Svg>
)
export default SVGComponent