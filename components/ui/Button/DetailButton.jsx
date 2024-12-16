import { PlayDetailIcon, FloorDetailIcon } from '@/assets/icons/Detail'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const DetailButton = ({ navigation }) => {
  return (
    <TouchableOpacity
      className='bg-primary rounded-2xl w-60 overflow-hidden'
      onPress={() => navigation.navigate('Player')}
    >
      <View className='px-8 pt-4 pb-5 flex flex-row gap-3 items-center justify-center'>
        <PlayDetailIcon />
        <Text className='text-xl font-inter700'>
          Devam Et <Text className='font-inter800'>S2</Text>{' '}
          <Text className='font-inter800'>B3</Text>
        </Text>
      </View>
      <View className='absolute bottom-0 left-0 w-full overflow-hidden'>
        <View className='absolute bottom-0 left-0 w-1/2 h-2 z-20 bg-[#A3BD1D] rounded-full' />
        <FloorDetailIcon className='absolute bottom-0 left-0 w-full' />
      </View>
    </TouchableOpacity>
  )
}

export default DetailButton
