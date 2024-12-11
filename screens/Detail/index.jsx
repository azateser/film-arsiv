import React from 'react'
import { SafeAreaView, View, TouchableOpacity, Text } from 'react-native'
import { BackDetailIcon, LiveDetailIcon } from '@/assets/icons/Detail'
import DetailActions from './components/DetailActions'
import DetailPlay from './components/DetailPlay'
import Content from './components/Content'
import Cover from './components/Cover'
import Tab from '@/components/ui/Tab'

const tabs = [
  {
    title: 'İnceleme',
    content: (
      <Text className='text-white/75 font-inter400'>
        Rick and Morty, Justin Roiland ve Dan Harmon tarafından Adult Swim için
        yaratılan bir yetişkin animasyon televizyon dizisidir. Dizi, kendi
        zamanlarını aile hayatı ve boyutlar arası yolculuk arasında bölüştürmüş
        alkolik bilim insanı Rick ve onun torunu Morty'nin maceralarını anlatır.
        Rick and Morty, Justin Roiland ve Dan Harmon tarafından Adult Swim için
        yaratılan
      </Text>
    ),
  },
  {
    title: 'Oyuncular',
    content: (
      <Text className='text-white/75 font-inter400'>Detay sayfası gelecek</Text>
    ),
  },
  {
    title: 'Sezonlar',
    content: (
      <Text className='text-white/75 font-inter400'>
        Sezonlar sayfası gelecek
      </Text>
    ),
  },
  {
    title: 'Yorumlar',
    content: (
      <Text className='text-white/75 font-inter400'>
        Sezonlar sayfası gelecek
      </Text>
    ),
  },
]

const DetailScreen = ({ navigation }) => {
  return (
    <View className='bg-background flex-1'>
      <Cover />
      <SafeAreaView>
        <View className='flex justify-between flex-row px-5 mt-t'>
          <TouchableOpacity onPress={() => navigation.goBack()}>
            <BackDetailIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <LiveDetailIcon />
          </TouchableOpacity>
        </View>
        <Content />
        <DetailPlay />
        <DetailActions />
        <Tab tabs={tabs} />
      </SafeAreaView>
    </View>
  )
}

export default DetailScreen
