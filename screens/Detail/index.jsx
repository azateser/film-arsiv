import React from 'react'
import { Image, SafeAreaView, Text, View } from 'react-native'
import DemoImage from '@/assets/images/Home/demoImage.jpg'
import { LinearGradient } from 'expo-linear-gradient'

const DetailScreen = () => {
  return (
    <View className='bg-background flex-1'>
      <View className='relative'>
        <Image className='w-full h-[310px]' source={DemoImage} />
        <LinearGradient
          colors={['rgba(18,19,24ş,0)', 'rgba(18,19,24,1)']}
          start={[0, 0]}
          end={[0, 0.8]}
          style={{
            position: 'absolute',
            left: 0,
            right: 0,
            top: 0,
            height: 383,
          }}
        />
      </View>
      <SafeAreaView></SafeAreaView>
    </View>
  )
}

export default DetailScreen
