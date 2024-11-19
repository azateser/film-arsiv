import * as React from 'react'
import Svg, { Path } from 'react-native-svg'
const SVGComponent = props => (
  <Svg
    width={20}
    height={20}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M14.3571 14.3572C14.7121 14.0022 15.2877 14.0022 15.6427 14.3572L19.7336 18.4481C20.0886 18.8031 20.0886 19.3787 19.7336 19.7337C19.3786 20.0887 18.803 20.0887 18.448 19.7337L14.3571 15.6428C14.0021 15.2878 14.0021 14.7122 14.3571 14.3572Z'
      fill='white'
      fillOpacity={0.75}
    />
    <Path
      fillRule='evenodd'
      clipRule='evenodd'
      d='M0 9.09092C0 4.07014 4.07014 0 9.09092 0C14.1116 0 18.1818 4.07014 18.1818 9.09092C18.1818 14.1116 14.1116 18.1818 9.09092 18.1818C4.07014 18.1818 0 14.1116 0 9.09092ZM9.09092 1.81818C5.0743 1.81818 1.81818 5.0743 1.81818 9.09092C1.81818 13.1076 5.0743 16.3637 9.09092 16.3637C13.1076 16.3637 16.3637 13.1076 16.3637 9.09092C16.3637 5.0743 13.1076 1.81818 9.09092 1.81818Z'
      fill='white'
      fillOpacity={0.75}
    />
  </Svg>
)
export default SVGComponent
