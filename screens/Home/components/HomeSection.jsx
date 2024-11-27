import Movie from '@/components/ui/Movie'
import React from 'react'
import { Text, View } from 'react-native'
import { ScrollView, TouchableOpacity } from 'react-native-gesture-handler'

const HomeSection = ({ title, data, navigation }) => {
  return (
    <View className='pl-5'>
      <View className='flex pr-5 flex-row items-center justify-between mb-2.5'>
        <Text className='text-white font-inter700 text-lg'>{title}</Text>
        <TouchableOpacity>
          <Text className='text-primary font-inter500 text-base'>
            Tümünü Gör
          </Text>
        </TouchableOpacity>
      </View>

      <ScrollView
        horizontal={true}
        contentContainerStyle={{
          display: 'flex',
          flexDirection: 'row',
          gap: 4,
        }}
        showsHorizontalScrollIndicator={false}
      >
        {data.map((item, index) => (
          <Movie
            navigation={navigation}
            key={index}
            image={item.image}
            hd={item.hd}
            newMovie={item.new}
            live={item.live}
            watched={item.watched}
          />
        ))}
      </ScrollView>
    </View>
  )
}

export default HomeSection
