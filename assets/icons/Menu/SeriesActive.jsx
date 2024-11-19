import * as React from 'react'
import Svg, { Rect, Path } from 'react-native-svg'
const SVGComponent = props => (
  <Svg
    width={67}
    height={33}
    viewBox='0 0 67 33'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Rect width={67} height={33} rx={16.5} fill='#DBFA3A' fillOpacity={0.2} />
    <Path
      d='M35.0564 10.7499C36.8942 10.7499 38.3498 10.7498 39.489 10.8986C40.6614 11.0518 41.6104 11.3744 42.3588 12.1014C43.1071 12.8283 43.4392 13.7502 43.5969 14.8891C43.75 15.9958 43.75 17.4098 43.75 19.195V19.3047C43.75 21.09 43.75 22.504 43.5969 23.6106C43.4392 24.7496 43.1071 25.6714 42.3588 26.3984C41.6104 27.1254 40.6614 27.448 39.489 27.6011C38.3498 27.7499 36.8942 27.7499 35.0565 27.7499H30.9436C29.1059 27.7499 27.6502 27.7499 26.511 27.6011C25.3386 27.448 24.3896 27.1254 23.6412 26.3984C22.8929 25.6714 22.5608 24.7496 22.4031 23.6106C22.25 22.504 22.25 21.0899 22.25 19.3047V19.1951C22.25 17.4098 22.25 15.9958 22.4031 14.8891C22.5608 13.7502 22.8929 12.8283 23.6412 12.1014C24.3896 11.3744 25.3386 11.0518 26.511 10.8986C27.6502 10.7498 29.1058 10.7499 30.9436 10.7499H35.0564Z'
      fill='#DBFA3A'
    />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M36.2929 6.54277C36.6834 6.15225 37.3166 6.15225 37.7071 6.54277C38.0976 6.9333 38.0976 7.56646 37.7071 7.95698L33.7071 11.957C33.3166 12.3475 32.6834 12.3475 32.2929 11.957L29.2929 8.95698C28.9024 8.56646 28.9024 7.9333 29.2929 7.54277C29.6834 7.15225 30.3166 7.15225 30.7071 7.54277L33 9.83566L36.2929 6.54277Z'
      fill='#DBFA3A'
    />
  </Svg>
)
export default SVGComponent