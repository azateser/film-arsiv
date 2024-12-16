import React from 'react'
import { Image, Text, TouchableOpacity, View } from 'react-native'

import S1B1Cover from '@/assets/images/SeriesDemo/1.jpg'
import { PlayLayoutIcon } from '@/assets/icons/Layout'

const PlayerEpisodes = ({ data }) => {
  return (
    <TouchableOpacity>
      <View className='flex flex-row items-start gap-3 w-full overflow-hidden'>
        <View className='w-32 h-20 rounded-xl'>
          <Image
            className='w-full h-full object-cover rounded-xl'
            source={data.image}
          />
          <View className='flex items-center justify-center bg-[#12131880] w-full h-full rounded-xl absolute top-0 left-0'>
            <PlayLayoutIcon />
          </View>
        </View>
        <View className='w-full gap-1'>
          <Text className='font-inter700 text-sm text-white'>
            {`B${data.episode}: “${data.episodeTitle}`}
          </Text>
          <Text className='font-inter400 text-[10px] text-white/50 w-max h-max line-clamp-3'>
            {data.description}
          </Text>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default PlayerEpisodes
