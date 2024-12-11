import React, { useState, useRef } from 'react'
import {
  View,
  Text,
  PanResponder,
  Animated,
  TouchableOpacity,
} from 'react-native'

const PlayerBar = ({ totalDuration, currentTime, onSeek }) => {
  const [isDragging, setIsDragging] = useState(false)
  const barRef = useRef(null)

  const formatTime = seconds => {
    const mins = Math.floor(seconds / 60)
    const secs = Math.floor(seconds % 60)
    return `${mins.toString().padStart(2, '0')}:${secs
      .toString()
      .padStart(2, '0')}`
  }

  const handleTimelinePress = event => {
    event.persist()

    barRef.current.measure((x, y, width, height, pageX, pageY) => {
      const { locationX } = event.nativeEvent

      const seekPercentage = locationX / width
      const newTime = seekPercentage * totalDuration

      const constrainedTime = Math.max(0, Math.min(newTime, totalDuration))

      onSeek(constrainedTime)
    })
  }

  const panResponder = PanResponder.create({
    onStartShouldSetPanResponder: () => true,
    onMoveShouldSetPanResponder: () => true,
    onPanResponderGrant: () => {
      setIsDragging(true)
    },
    onPanResponderMove: (e, gestureState) => {
      barRef.current.measure((x, y, width, height, pageX, pageY) => {
        const relativeX = gestureState.moveX - pageX

        const seekPercentage = relativeX / width
        const newTime = seekPercentage * totalDuration

        const constrainedTime = Math.max(0, Math.min(newTime, totalDuration))

        onSeek(constrainedTime)
      })
    },
    onPanResponderRelease: () => {
      setIsDragging(false)
    },
  })

  const progressPercentage = Math.max(
    0,
    Math.min(100, (currentTime / totalDuration) * 100),
  )

  return (
    <View className='flex flex-row items-center gap-4 mb-4 px-5'>
      <View className='flex-1'>
        <TouchableOpacity
          ref={barRef}
          activeOpacity={1}
          onPress={handleTimelinePress}
          className='w-full h-4 bg-transparent relative z-50'
        >
          <View
            className='absolute h-1 bg-primary top-1/2 transform -translate-y-1/2'
            style={{ width: `${progressPercentage}%` }}
          />
          <View className='absolute w-full h-1 bg-[#AAABAD]/50 top-1/2 transform -translate-y-1/2' />

          <Animated.View
            {...panResponder.panHandlers}
            className={`
             w-6 h-6 rounded-full 
             bg-primary 
             absolute top-1/2 
             transform -translate-x-1/2 -translate-y-1/2
             ${isDragging ? 'scale-125' : ''}
           `}
            style={{ left: `${progressPercentage}%` }}
          />
        </TouchableOpacity>
      </View>

      <Text className='text-white font-inter400 text-lg'>
        {formatTime(currentTime)} / {formatTime(totalDuration)}
      </Text>
    </View>
  )
}

export default PlayerBar
