import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import {
  GoBack10SecPlayerIcon,
  GoForward10SecPlayerIcon,
  PlayPlayerIcon,
  PausePlayerIcon,
} from '@/assets/icons/Player'

const PlayerController = ({
  isPlaying,
  togglePlayPause,
  handleGoBack10Seconds,
  handleGoForward10Seconds,
}) => {
  return (
    <View className='flex gap-52 items-center flex-row mt-8'>
      <TouchableOpacity onPress={handleGoBack10Seconds}>
        <GoBack10SecPlayerIcon />
      </TouchableOpacity>
      <TouchableOpacity onPress={togglePlayPause}>
        {isPlaying ? <PausePlayerIcon /> : <PlayPlayerIcon />}
      </TouchableOpacity>
      <TouchableOpacity onPress={handleGoForward10Seconds}>
        <GoForward10SecPlayerIcon />
      </TouchableOpacity>
    </View>
  )
}

export default PlayerController
