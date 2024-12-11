import React from 'react'
import { Text, View, TouchableOpacity } from 'react-native'

import {
  BookmarkDetailIcon,
  ReportDetailIcon,
  ShareDetailIcon,
  YoutubeDetailIcon,
} from '@/assets/icons/Detail'

const ActionsData = [
  {
    icon: <BookmarkDetailIcon />,
    title: 'Listeye Ekle',
  },
  {
    icon: <YoutubeDetailIcon />,
    title: 'Fragman',
  },
  {
    icon: <ShareDetailIcon />,
    title: 'Paylaş',
  },
]

const DetailActions = () => {
  return (
    <View className='flex flex-row justify-between px-5 mt-12'>
      <View className='flex flex-row gap-10 items-center'>
        {ActionsData.map((item, index) => (
          <TouchableOpacity key={index}>
            <View className='flex items-center gap-2'>
              {item.icon}
              <Text className='text-white  font-inter500'>{item.title}</Text>
            </View>
          </TouchableOpacity>
        ))}
      </View>
      <TouchableOpacity>
        <View className='flex items-center gap-2'>
          <ReportDetailIcon />
          <Text className='text-white font-medium'>Hata Bildir</Text>
        </View>
      </TouchableOpacity>
    </View>
  )
}

export default DetailActions
