import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SVGComponent = ({ active, ...props }) => (
  <Svg
    width={73}
    height={73}
    viewBox='0 0 73 73'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      d='M19.6177 36.5404L37.0296 54.3019M19.6177 36.5404L7.60419 24.6572C7.60419 24.6572 16.6533 12.1699 29.0625 20.1575L30.179 20.9608M19.6177 36.5404C23.0127 30.0858 26.5829 24.9744 30.179 20.9608M37.0296 54.3019L47.7855 65.3958C47.7855 65.3958 59.832 56.3119 52.3803 43.8091L52.2501 43.577M37.0296 54.3019C43.3289 50.8539 48.3236 47.2288 52.2501 43.577M30.179 20.9608C43.6644 5.91001 57.5131 6.29724 63.848 9.18323C66.6804 15.653 67.0575 29.8056 52.2501 43.577'
      stroke={active ? '#141B34' : '#DBFA3A'}
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M17.3638 44.1035C15.4418 46.0255 12.1744 51.5994 14.4808 58.5186C21.4001 60.8251 26.9739 57.5577 28.8959 55.6357'
      stroke={active ? '#141B34' : '#DBFA3A'}
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
    <Path
      d='M53.2292 25.8542C53.2292 22.4945 50.5057 19.7709 47.1458 19.7709C43.786 19.7709 41.0625 22.4945 41.0625 25.8542C41.0625 29.2139 43.786 31.9375 47.1458 31.9375C50.5057 31.9375 53.2292 29.2139 53.2292 25.8542Z'
      stroke={active ? '#141B34' : '#DBFA3A'}
      strokeWidth={4}
      strokeLinecap='round'
      strokeLinejoin='round'
    />
  </Svg>
)
export default SVGComponent
