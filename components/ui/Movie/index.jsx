import React from 'react'
import { Image, Text, View } from 'react-native'
import DemoImage from '@/assets/images/Home/2.png'
import { TouchableOpacity } from 'react-native-gesture-handler'

const Movie = ({
  navigation,
  image,
  watched = false,
  live = false,
  newMovie = false,
  hd = false,
}) => {
  return (
    <TouchableOpacity
      onPress={() => navigation.navigate('Detail')}
      className='relative'
      activeOpacity={0.7}
    >
      <View className='absolute flex gap-1 flex-row z-10 top-2 left-2'>
        {hd && (
          <View className='px-2.5 py-1 rounded-md bg-[#121318]/90'>
            <Text className='text-white text-xs font-inter800'>HD</Text>
          </View>
        )}
        {live && (
          <View className='px-2.5 py-1 rounded-md bg-[#b82a2a]/80'>
            <Text className='text-white text-xs font-inter800'>CANLI</Text>
          </View>
        )}
        {newMovie && (
          <View className='px-2.5 py-1 rounded-md bg-[#22b25c]/80'>
            <Text className='text-white text-xs font-inter800'>YENİ</Text>
          </View>
        )}
      </View>
      <View className='w-40 h-56'>
        <Image
          className='rounded-xl w-full h-full object-cover'
          source={image}
        />
      </View>
      {watched && (
        <>
          <View className='absolute bottom-0 left-0 w-2/3 h-1.5 rounded-bl-lg z-10 bg-red-500' />
          <View className='absolute bottom-0 left-0 w-full h-1.5 rounded-b-lg bg-white/40' />
        </>
      )}
    </TouchableOpacity>
  )
}

export default Movie
