import * as React from 'react'
import Svg, { G, Path, Defs, ClipPath, Rect } from 'react-native-svg'
const SVGComponent = props => (
  <Svg
    width={24}
    height={24}
    viewBox='0 0 20 20'
    fill='none'
    xmlns='http://www.w3.org/2000/svg'
    {...props}
  >
    <G clipPath='url(#clip0_36_2)'>
      <Path
        d='M10 13.3333H10.0075'
        stroke='white'
        strokeWidth={2}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M10 10.8334V6.66669'
        stroke='white'
        strokeWidth={1.5}
        strokeLinecap='round'
        strokeLinejoin='round'
      />
      <Path
        d='M12.6274 3.57006C11.6492 3.20701 11.2148 1.75396 10.0999 1.67041C10.0337 1.66545 9.967 1.66545 9.90075 1.67041C8.78583 1.75397 8.3515 3.20693 7.37325 3.57006C6.33743 3.95439 4.92109 3.16659 4.04401 4.04368C3.19981 4.88787 3.94686 6.3583 3.5704 7.37291C3.18555 8.4096 1.5762 8.83844 1.67075 10.0996C1.7543 11.2145 3.20735 11.6489 3.5704 12.6271C3.94687 13.6417 3.19976 15.1122 4.04401 15.9564C4.92096 16.8334 6.3374 16.0459 7.37325 16.4299C8.35125 16.7935 8.786 18.2462 9.90075 18.3296C9.967 18.3346 10.0337 18.3346 10.0999 18.3296C11.2147 18.2462 11.6495 16.7934 12.6274 16.4299C13.6421 16.0538 15.1127 16.8006 15.9567 15.9564C16.8627 15.0504 15.9897 13.5818 16.4684 12.535C16.9108 11.5713 18.422 11.1199 18.3299 9.90044C18.2465 8.78569 16.7938 8.35085 16.4302 7.37291C16.0462 6.33706 16.8337 4.92063 15.9567 4.04368C15.0797 3.16655 13.6632 3.95441 12.6274 3.57006Z'
        stroke='white'
        strokeWidth={1.5}
      />
    </G>
    <Defs>
      <ClipPath id='clip0_36_2'>
        <Rect width={20} height={20} fill='white' />
      </ClipPath>
    </Defs>
  </Svg>
)
export default SVGComponent
