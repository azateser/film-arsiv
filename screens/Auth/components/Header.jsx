import LogoSVG from '@/assets/global/Logo'
import React from 'react'
import { Text, View } from 'react-native'

const AuthHeader = ({ title }) => {
  return (
    <View className='flex items-center gap-6'>
      <LogoSVG />
      <Text className='text-white text-center text-lg opacity-75'>{title}</Text>
    </View>
  )
}

export default AuthHeader
