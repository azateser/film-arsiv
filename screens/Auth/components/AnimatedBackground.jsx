import React from 'react'
import { Image, View } from 'react-native'
import {
  MovieCover_1,
  MovieCover_2,
  MovieCover_3,
  MovieCover_4,
  MovieCover_5,
  MovieCover_6,
  MovieCover_7,
  MovieCover_8,
  MovieCover_9,
  MovieCover_10,
  MovieCover_11,
  MovieCover_12,
} from '@/assets/images'
import Marquee from '@/components/Animated/Marquee'
import { LinearGradient } from 'expo-linear-gradient'

const imageGroups = [
  [MovieCover_1, MovieCover_2, MovieCover_3, MovieCover_4],
  [MovieCover_5, MovieCover_6, MovieCover_7, MovieCover_8],
  [MovieCover_9, MovieCover_10, MovieCover_11, MovieCover_12],
]

const AnimatedBackground = ({
  duration = 100000,
  stop,
  gradient = 'short',
}) => {
  return (
    <View className='h-full absolute w-full flex gap-3.5 items-center top-0 left-0 z-0'>
      <LinearGradient
        colors={['#12131800', '#121318']}
        start={gradient === 'short' ? [0, 0] : [4, 0]}
        style={{
          position: 'absolute',
          width: '100%',
          bottom: 158.2,
          left: 0,
          height: 1324,
          zIndex: 10,
        }}
      />
      {(gradient === 'short' ? imageGroups : imageGroups.slice(0, 2)).map(
        (group, index) => {
          const marqueeProps = {
            duration,
            reverse: index % 2 === 1,
          }
          return stop ? (
            <View key={index} className='flex flex-row'>
              {group.map((source, idx) => (
                <Image key={idx} source={source} className='mx-1.5' />
              ))}
            </View>
          ) : (
            <Marquee key={index} {...marqueeProps}>
              <View className='flex flex-row'>
                {group.map((source, idx) => (
                  <Image key={idx} source={source} className='mx-1.5' />
                ))}
              </View>
            </Marquee>
          )
        },
      )}
    </View>
  )
}

export default AnimatedBackground
