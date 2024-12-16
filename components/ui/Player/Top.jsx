import { BackPlayerIcon } from '@/assets/icons/Player'
import React from 'react'
import { TouchableOpacity, View } from 'react-native'
import useGenerateVideoTitle from '@/utils/videoTitleGenerator'

const PlayerTop = ({ navigation, data }) => {
  return (
    <View className='flex flex-row justify-between items-center w-full py-6 px-8'>
      <TouchableOpacity onPress={() => navigation.goBack()}>
        <BackPlayerIcon />
      </TouchableOpacity>
      {useGenerateVideoTitle(data)}
      <View></View>
    </View>
  )
}

export default PlayerTop
