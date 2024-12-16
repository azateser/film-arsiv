import React from 'react'
import { View } from 'react-native'
import { DownloadDetailIcon } from '@/assets/icons/Detail'
import DetailButton from '@/components/ui/Button/DetailButton'
import Button from '@/components/ui/Button'

const DetailPlay = ({ navigation }) => {
  return (
    <>
      <View className='flex flex-row justify-between px-5 mt-8'>
        <DetailButton navigation={navigation} />
        <Button
          className='!min-w-28 !border-2'
          variant='outline'
          onlyIcon={<DownloadDetailIcon />}
        />
      </View>
    </>
  )
}

export default DetailPlay
