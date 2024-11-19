import React from 'react'
import { Modal, Text, View, Image, TouchableOpacity } from 'react-native'
import Button from '@/components/ui/Button'
import { ProfileAvatarData } from '@/mocks/ProfileAvatar'

const SelectAvatarModal = ({
  selectedImage,
  setSelectedImage,
  modalVisible,
  setModalVisible,
}) => {
  return (
    <Modal animationType={'fade'} transparent={true} visible={modalVisible}>
      <View className='flex-1 bg-black/20 items-center justify-center'>
        <View className='flex bg-[#23252d] shadow-md m-10 max-w-[86%] w-full border-1 border-white rounded-7 shadow-10 rounded-2xl'>
          <View>
            <Text className='text-white px-6 py-6 text-2xl font-inter700'>
              Avatar Seç
            </Text>
            <View className='h-[1px] w-full bg-white/10'></View>
          </View>

          <View className='flex flex-wrap justify-between items-center flex-row gap-2 px-6 py-6'>
            {ProfileAvatarData.map((item, index) => (
              <TouchableOpacity
                key={index}
                onPress={() => setSelectedImage(item.id)}
              >
                <Image
                  source={item.image}
                  className={`w-28 h-28 rounded-full ${
                    selectedImage === item.id
                      ? 'border-4 border-primary opacity-100'
                      : 'opacity-50'
                  }   ${item.id > 3 ? 'mt-1' : ''}`}
                />
              </TouchableOpacity>
            ))}
          </View>

          <View className='flex flex-row gap-4 px-6 pb-4'>
            <Button
              title='Vazgeç'
              variant='secondary'
              className='!flex-1 !min-w-0 !w-full'
              onPress={() => setModalVisible(false)}
            />
            <Button
              title='Görseli Seç'
              className='!flex-1 !min-w-0 !w-full'
              onPress={() => setModalVisible(false)}
            />
          </View>
        </View>
      </View>
    </Modal>
  )
}

export default SelectAvatarModal
