import React, { useState, useEffect } from 'react'
import VideoPlayer from '@/components/ui/Player'
import ExampleVideoData from '@/mocks/ExampleVideoData'
import {
  SafeAreaView,
  ScrollView,
  Text,
  TouchableOpacity,
  View,
} from 'react-native'
import { EpisodesData } from '@/mocks/Episodes'
import Animated, { useAnimatedStyle, withTiming } from 'react-native-reanimated'
import { ClosePlayerIcon } from '@/assets/icons/Player'
import Select from '@/components/ui/Select'

import PlayerEpisodes from './components/Episodes'

const PlayerScreen = ({ navigation }) => {
  const [showEpisodes, setShowEpisodes] = useState(true)
  const [seasons, setSeasons] = useState([{ key: 1, value: 'SEZON 1' }])
  const [episodes, setEpisodes] = useState(EpisodesData[0])

  const animatedStyle = useAnimatedStyle(() => ({
    transform: [
      {
        translateX: withTiming(showEpisodes ? 0 : 0, {
          duration: 500,
        }),
      },
    ],
    width: withTiming(showEpisodes ? '60%' : '100%', {
      duration: 500,
    }),
    height: withTiming(showEpisodes ? '60%' : '100%', {
      duration: 500,
    }),
  }))

  const toggleEpisodes = () => {
    setShowEpisodes(prev => !prev)
  }

  useEffect(() => {
    setEpisodes(EpisodesData[Number(seasons.key) - 1])
  }, [seasons])

  const seasonData = Object.keys(EpisodesData).map(key => ({
    key: Number(key) + 1,
    value: `SEZON ${Number(key) + 1}`,
  }))

  return (
    <View className='flex flex-row items-center bg-background w-full flex-1'>
      <Animated.View style={animatedStyle}>
        <VideoPlayer
          source={ExampleVideoData}
          navigation={navigation}
          showEpisodes={showEpisodes}
          setShowEpisodes={toggleEpisodes}
        />
      </Animated.View>
      <SafeAreaView className='flex-1'>
        {showEpisodes && (
          <SafeAreaView className='w-full h-full bg-[#0D0D11] flex-1'>
            <View className='w-full h-full bg-[#0D0D11] flex-1'>
              <View className='flex flex-row px-5 py-4 border-[#7D8089]/50 border-solid border-b items-center justify-between'>
                <Text className='text-white/75 text-2xl font-inter700'>
                  Bölümler
                </Text>
                <TouchableOpacity onPress={toggleEpisodes}>
                  <ClosePlayerIcon />
                </TouchableOpacity>
              </View>
              <View className='flex flex-row items-center justify-between px-5 mt-5'>
                <Text className='text-lg font-inter400 text-white'>
                  Sezonlar
                </Text>
                <Select
                  placeholder='SEZON SEÇİN'
                  data={seasonData}
                  selected={seasons[0]}
                  setSelected={key =>
                    setSeasons(seasonData.find(season => season.key === key))
                  }
                />
              </View>
              <ScrollView contentContainerClassName='flex gap-3 px-5 my-5'>
                {episodes?.map((episode, index) => (
                  <PlayerEpisodes key={index} data={episode} />
                ))}
              </ScrollView>
            </View>
          </SafeAreaView>
        )}
      </SafeAreaView>
    </View>
  )
}

export default PlayerScreen
