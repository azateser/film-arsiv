import {
  Background10SecBackDoubleTabPlayerIcon,
  Background10SecForwardDoubleTabPlayerIcon,
} from '@/assets/icons/Player'
import React from 'react'
import { Animated } from 'react-native'

const DoubleTab = ({ seekAnimation, seekAnimationValue, seekDirection }) => {
  return (
    seekAnimation && (
      <Animated.View
        style={{
          position: 'absolute',
          display: 'flex',
          justifyContent: 'center',
          alignItems: seekDirection === 'left' ? 'flex-start' : 'flex-end',
          width: '100%',
          height: '100%',
          top: '0',
          zIndex: 9999,
          transform: [
            {
              scale: seekAnimationValue.interpolate({
                inputRange: [0, 1.1, 1.2],
                outputRange: [1.1, 1.2, 1],
              }),
            },
          ],
          opacity: seekAnimationValue.interpolate({
            inputRange: [0, 0.5, 1],
            outputRange: [1, 0.5, 0],
          }),
        }}
      >
        {seekDirection === 'left' ? (
          <Background10SecBackDoubleTabPlayerIcon />
        ) : (
          <Background10SecForwardDoubleTabPlayerIcon />
        )}
      </Animated.View>
    )
  )
}

export default DoubleTab
