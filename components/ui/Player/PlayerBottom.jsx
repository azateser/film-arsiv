import React, { useState } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import {
  DownloadPlayerIcon,
  EpisodesPlayerIcon,
  NextEpisodePlayerIcon,
  SpeedControlPlayerIcon,
  SubtitlePlayerIcon,
} from '@/assets/icons/Player'

const PlayerBottom = ({
  videoSpeed,
  setVideoSpeed,
  setShowControls,
  toggleEpisodes,
}) => {
  const ControlData = [
    {
      icon: <SpeedControlPlayerIcon />,
      title: `Hız (${videoSpeed}x)`,
      onPress: () => {
        switch (videoSpeed) {
          case 1:
            setShowControls(true)
            setVideoSpeed(1.25)
            break
          case 1.25:
            setShowControls(true)
            setVideoSpeed(1.5)
            break
          case 1.5:
            setShowControls(true)
            setVideoSpeed(1.75)
            break
          case 1.75:
            setShowControls(true)
            setVideoSpeed(2)
            break
          case 2:
            setShowControls(true)
            setVideoSpeed(1)
            break
          default:
            setShowControls(true)
            setVideoSpeed(1)
            break
        }
      },
    },
    {
      icon: <EpisodesPlayerIcon />,
      title: 'Bölümler',
      onPress: toggleEpisodes,
    },
    {
      icon: <SubtitlePlayerIcon />,
      title: 'Dil ve Altyazı',
      onPress: () => console.log('Subtitle'),
    },
    {
      icon: <DownloadPlayerIcon />,
      title: 'İndir',
      onPress: () => console.log('Download'),
    },
    {
      icon: <NextEpisodePlayerIcon />,
      title: 'Sıradaki Bölüm',
      onPress: () => console.log('Next Episode'),
    },
  ]

  return (
    <View className='mb-4 flex flex-row justify-between items-center w-full px-5'>
      {ControlData.map((control, index) => (
        <TouchableOpacity
          key={index}
          className='flex flex-row gap-3 items-center'
          onPress={control.onPress}
        >
          {control.icon}
          <Text className='text-white font-inter500 text-lg'>
            {control.title}
          </Text>
        </TouchableOpacity>
      ))}
    </View>
  )
}

export default PlayerBottom
