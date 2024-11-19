import React from 'react'
import { SafeAreaView, ScrollView, Text, View } from 'react-native'
import Button from '@/components/ui/Button'
import Header from '@/components/layout/Header'
import MainSlider from './components/MainSlider'

const HomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-background'>
      <View className='h-full flex mb-4'>
        <Header />
        <MainSlider />
        <ScrollView contentContainerStyle={{ paddingTop: 20 }}>
          <Text className='text-white text-3xl'>Hemen İzle Butonları</Text>
          <Text className='text-white text-3xl'>Yeni Kısmı</Text>
          {/* react-native-snap-carousel */}
          <Button
            style={{ marginTop: 20 }}
            onPress={() => navigation.goBack()}
            title='Go Back'
          />
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
