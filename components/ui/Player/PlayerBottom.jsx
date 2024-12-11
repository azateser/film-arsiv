import React, { useState } from 'react'
import { TouchableOpacity, Text, View } from 'react-native'
import {
  DownloadPlayerIcon,
  EpisodesPlayerIcon,
  NextEpisodePlayerIcon,
  SpeedControlPlayerIcon,
  SubtitlePlayerIcon,
} from '@/assets/icons/Player'

const ControlData = [
  {
    icon: <SpeedControlPlayerIcon />,
    title: 'Hız (1x)',
    onPress: () => console.log('Speed Control'),
  },
  {
    icon: <EpisodesPlayerIcon />,
    title: 'Bölümler',
    onPress: () => console.log('Episodes'),
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

const PlayerBottom = () => {
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
