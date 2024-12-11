import React from 'react'
import { Image, Text, View } from 'react-native'
import DemoImage from '@/assets/images/Home/demoImage.jpg'
import { StarDetailIcon } from '@/assets/icons/Detail'

const Content = () => {
  return (
    <View className='flex flex-row items-center gap-8 px-5 mt-40'>
      <View className='w-28 h-40'>
        <Image
          className='w-full h-full object-cover rounded-xl'
          source={DemoImage}
        />
      </View>
      <View className='mt-14'>
        <View>
          <Text className='text-white/75 font-inter500 text-3xl'>
            Rick and Morty
          </Text>
        </View>
        <View className='flex flex-row gap-3 items-center mt-3'>
          <View className='flex flex-row gap-2 items-center'>
            <StarDetailIcon />
            <Text className='text-primary text-sm font-inter500'>4,2</Text>
          </View>
          <View>
            <Text className='text-white/75 text-sm font-inter500'>
              (412 voted)
            </Text>
          </View>
          <View className='w-1 h-1 rounded-full bg-white/75' />
          <View>
            <Text className='text-white/75 text-sm font-inter500'>2012</Text>
          </View>
        </View>
      </View>
    </View>
  )
}

export default Content
