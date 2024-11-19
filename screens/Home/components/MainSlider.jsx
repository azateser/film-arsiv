import React, { useState } from 'react'
import { Dimensions, Image, Text, View } from 'react-native'
import Carousel from 'react-native-reanimated-carousel'

import MovieCover1 from '@/images/Home/1.png'
import MovieCover2 from '@/images/Home/2.png'
import MovieCover3 from '@/images/Home/3.png'
import { TouchableOpacity } from 'react-native-gesture-handler'

const MainSlider = () => {
  const width = Dimensions.get('window').width

  const SliderData = [
    {
      id: 0,
      title: 'The Walking Dead',
      image: MovieCover1,
      type: 'Dizi',
      season: 11,
      category: 'Aksiyon',
    },
    {
      id: 1,
      title: 'Rick and Morty',
      image: MovieCover2,
      type: 'Dizi',
      season: 5,
      category: 'Bilim Kurgu',
      newSeason: true,
    },
    {
      id: 2,
      title: 'Stranger Things',
      image: MovieCover3,
      type: 'Dizi',
      season: 4,
      category: 'Dram',
    },
  ]

  const [currentIndex, setCurrentIndex] = useState(0)

  return (
    <View className='h-[430px] mb-2'>
      <Carousel
        loop
        autoPlay
        autoPlayInterval={6000}
        scrollAnimationDuration={2000}
        width={width}
        data={SliderData}
        snapEnabled
        height={430}
        pagingEnabled
        mode='parallax'
        onScrollBegin={() => setCurrentIndex(-1)}
        onScrollEnd={index => setCurrentIndex(index)}
        modeConfig={{
          parallaxScrollingScale: 0.9,
          parallaxScrollingOffset: 180,
          parallaxAdjacentItemScale: 0.7,
        }}
        renderItem={({ item, index }) => (
          <TouchableOpacity
            key={item.id}
            activeOpacity={1}
            onPress={() => setCurrentIndex(item.id)}
          >
            <View className='mt-4 flex w-full justify-between items-center'>
              <View className='relative w-[256px] h-[367px] rounded-xl mb-6'>
                <Image
                  source={item.image}
                  className='w-full h-full object-cover rounded-xl'
                />
              </View>
              {currentIndex === index && (
                <View className='flex flex-col items-center justify-center opacity-75'>
                  <Text className='text-white text-2xl font-inter700'>
                    {item.title}
                  </Text>
                  <View className='flex flex-row items-center gap-2'>
                    <Text className='text-white text-lg font-inter400'>
                      {item.type}
                    </Text>
                    <View className='w-1 h-1 bg-white rounded-full'></View>
                    <Text className='text-white text-lg font-inter400'>
                      {item.season} Sezon
                    </Text>
                    <View className='w-1 h-1 bg-white rounded-full'></View>
                    <Text className='text-white text-lg font-inter400'>
                      {item.category}
                    </Text>
                  </View>
                </View>
              )}
            </View>
          </TouchableOpacity>
        )}
      />
    </View>
  )
}

export default MainSlider
