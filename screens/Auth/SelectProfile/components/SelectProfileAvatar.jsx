import React, { useEffect, useState } from 'react'
import { Image, TouchableOpacity, View } from 'react-native'
import ProfileImage from '@/images/SelectProfile/PICON_06.png'
import { EditIcon } from '@/assets/icons/Auth'
import SelectAvatarModal from './SelectAvatarModal'
import { ProfileAvatarData } from '@/mocks/ProfileAvatar'

const SelectProfileAvatar = ({ profileAvatar, setProfileAvatar }) => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <>
      <TouchableOpacity
        className='relative'
        onPress={() => setModalVisible(true)}
      >
        <Image
          source={
            ProfileAvatarData.find(item => item.id === profileAvatar).image ||
            ProfileImage
          }
          className='w-28 h-28 rounded-full'
        />
        <View className='flex items-center justify-center absolute top-1/2 left-1/2 transform -translate-x-1/2 bg-black/50 w-24 h-24 rounded-full -translate-y-1/2'>
          <EditIcon />
        </View>
      </TouchableOpacity>
      <SelectAvatarModal
        selectedImage={profileAvatar}
        setSelectedImage={setProfileAvatar}
        modalVisible={modalVisible}
        setModalVisible={setModalVisible}
      />
    </>
  )
}

export default SelectProfileAvatar
