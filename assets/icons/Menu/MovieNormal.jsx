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
      d='M12 22C17.5228 22 22 17.5228 22 12C22 6.47715 17.5228 2 12 2C6.47715 2 2 6.47715 2 12C2 17.5228 6.47715 22 12 22Z'
      stroke='#7D8089'
      strokeWidth={1.5}
    />
    <Path
      d='M9 14.4086V9.59138C9 8.73892 10.0738 8.21659 10.9079 8.66336L15.4043 11.072C16.1986 11.4975 16.1986 12.5025 15.4043 12.928L10.9079 15.3366C10.0738 15.7834 9 15.2611 9 14.4086Z'
      stroke='#7D8089'
      strokeWidth={1.5}
      strokeLinejoin='round'
    />
  </Svg>
)
export default SVGComponent
