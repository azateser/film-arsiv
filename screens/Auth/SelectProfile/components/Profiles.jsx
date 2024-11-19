import React, { useState } from 'react'
import { AddIcon } from '@/assets/icons/Auth'
import { Image, Text, View, TouchableOpacity } from 'react-native'

const UserProfiles = ({ setModalVisible, currentProfiles }) => {
  const [selectedProfile, setSelectedProfile] = useState(1)

  return (
    <View className='flex justify-between flex-row flex-wrap gap-12 mb-20 px-4'>
      {currentProfiles.map(profile => (
        <TouchableOpacity
          key={profile.id}
          disabled={selectedProfile === profile.id}
          onPress={() => setSelectedProfile(profile.id)}
          className='flex flex-col gap-4 items-center w-max'
        >
          <Image
            source={profile.profileImage}
            className={`w-36 h-36 rounded-full ${
              selectedProfile === profile.id
                ? 'border-[5px] border-primary'
                : ''
            }`}
          />
          <Text className='text-white text-2xl font-inter600'>
            {profile.name}
          </Text>
        </TouchableOpacity>
      ))}
      {currentProfiles.length < 4 && (
        <TouchableOpacity
          className='w-36 h-36 flex items-center justify-center border-dashed border-[5px] border-white rounded-full'
          onPress={() => setModalVisible(true)}
        >
          <AddIcon />
        </TouchableOpacity>
      )}
    </View>
  )
}

export default UserProfiles
