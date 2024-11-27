import { DetailHomeIcon, SaveHomeIcon } from '@/assets/icons/Home'
import Button from '@/components/ui/Button'
import React from 'react'
import { Text, View } from 'react-native'

const SliderDetail = ({ navigation }) => {
  return (
    <View className='my-8 flex items-center flex-row justify-between'>
      <View className='w-1/4 flex gap-2 items-center justify-center'>
        <DetailHomeIcon />
        <Text className='text-white/75 font-inter500 text-sm'>Detaylar</Text>
      </View>
      <View className='w-2/4'>
        <Button
          onPress={() => navigation.navigate('Detail')}
          className='!min-w-60'
          textStyles='text-xl font-inter800 '
          title='Hemen İzle'
        />
      </View>
      <View className='w-1/4 flex gap-2 items-center justify-center'>
        <SaveHomeIcon />
        <Text className='text-white/75 font-inter500 text-sm'>Kaydet</Text>
      </View>
    </View>
  )
}

export default SliderDetail
