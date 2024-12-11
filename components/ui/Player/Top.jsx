import { BackPlayerIcon } from '@/assets/icons/Player'
import React from 'react'
import { Text, View } from 'react-native'

const PlayerTop = () => {
  return (
    <View className='flex flex-row justify-between items-center w-full py-6 px-8'>
      <BackPlayerIcon />
      <Text className='text-white/75 font-inter700 text-lg'>
        Rick And Morty: <Text className='font-inter400'>1. Sezon 1. Bölüm</Text>
      </Text>
      <View></View>
    </View>
  )
}

export default PlayerTop
