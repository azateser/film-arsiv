import React, { useEffect, useState } from 'react'
import { SafeAreaView, View, Text, Image, TouchableOpacity } from 'react-native'
import AnimatedBackground from '@/screens/Auth/components/AnimatedBackground'
import Button from '@/components/ui/Button'
import AuthHeader from '@/screens/Auth/components/Header'
import UserProfiles from './components/Profiles'
import CreateProfileModal from './components/CreateProfileModal'
import { CurrentProfileData } from '@/mocks/CurrentProfile'

export default SelectProfileScreen = ({ navigation }) => {
  const [modalVisible, setModalVisible] = useState(false)
  const [currentProfiles, setCurrentProfiles] = useState(CurrentProfileData)

  const [newProfile, setNewProfile] = useState({
    id: 4,
    name: '',
    profileImage: 1,
  })

  useEffect(() => {
    if (newProfile.name !== '') {
      setCurrentProfiles([...currentProfiles, newProfile])
    }
  }, [newProfile])
  ;('')
  return (
    <SafeAreaView className='bg-background'>
      <View className='h-full flex'>
        <AnimatedBackground gradient='long' stop duration={100000} />
        <View className='flex items-center justify-end pb-4 h-full px-8 gap-20'>
          <AuthHeader title='Abone olarak Film Arşivin Planlara Özel Ayrıcalıklarından Faydalanabilirsiniz' />
          <View className='flex gap-6'>
            <View>
              <CreateProfileModal
                modalVisible={modalVisible}
                setModalVisible={setModalVisible}
                setNewProfile={setNewProfile}
              />
              <UserProfiles
                currentProfiles={currentProfiles}
                setModalVisible={setModalVisible}
              />
              <Button
                title='Devam Et'
                onPress={() => navigation.navigate('Home')}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
