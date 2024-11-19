import React, { useState } from 'react'
import { Modal, Text, View } from 'react-native'
import Button from '@/components/ui/Button'
import Input from '@/components/ui/Input'
import SelectProfileAvatar from '@/screens/Auth/SelectProfile/components/SelectProfileAvatar'

const CreateProfileModal = ({
  setNewProfile,
  modalVisible,
  setModalVisible,
}) => {
  const [profileName, setProfileName] = useState('')
  const [profileAvatar, setProfileAvatar] = useState(1)

  const handleCreateProfile = () => {
    setNewProfile({
      id: 4,
      name: profileName,
      avatar: ProfileImage1,
    })
    setModalVisible(false)
  }

  return (
    <Modal animationType={'fade'} transparent={true} visible={modalVisible}>
      <View className='flex-1 bg-black/80 items-center justify-center'>
        <View className='flex bg-[#23252d] shadow-md m-10 max-w-[86%] w-full border-1 border-white rounded-7 shadow-10 rounded-2xl'>
          <View>
            <Text className='text-white px-6 py-6 text-2xl font-inter700'>
              Profil Ekle
            </Text>
            <View className='h-[1px] w-full bg-white/10'></View>
          </View>

          <View className='flex items-center flex-row gap-4 px-6 py-6'>
            <SelectProfileAvatar
              profileAvatar={profileAvatar}
              setProfileAvatar={setProfileAvatar}
            />
            <Input
              className='flex-1'
              title='Profil Adını Giriniz'
              placeholder='Profil Adı'
              onChangeText={setProfileName}
            />
          </View>

          <View className='flex flex-row gap-4 px-6 pb-4'>
            <Button
              className='!flex-1 !min-w-0 !w-full'
              title='Vazgeç'
              variant='secondary'
              onPress={() => setModalVisible(false)}
            />
            <Button
              className='!flex-1 !min-w-0 !w-full'
              title='Profili Ekle'
              onPress={handleCreateProfile}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default CreateProfileModal
