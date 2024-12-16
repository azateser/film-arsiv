import React from 'react'
import { SafeAreaView, ScrollView, View } from 'react-native'
import Header from '@/components/layout/Header'
import MainSlider from './components/MainSlider'
import SliderDetail from './components/SliderDetail'
import HomeSection from './components/HomeSection'
import {
  HomeAksiyonData,
  HomeBilimKurguData,
  HomeCocukData,
  HomeDramData,
  HomeKorkuData,
  HomeNewData,
  HomeRomantikData,
  HomeSanaOzelData,
} from '@/mocks/HomeData'

const HomeScreen = ({ navigation }) => {
  const [isScrolling, setIsScrolling] = React.useState(false)
  const scrollPosition = React.useRef(0)

  const handleScroll = ({ nativeEvent }) => {
    const currentOffset = nativeEvent.contentOffset.y

    if (currentOffset <= 0) {
      setIsScrolling(false)
    } else {
      const isScrollingDown = currentOffset > scrollPosition.current
      setIsScrolling(isScrollingDown)
    }

    scrollPosition.current = currentOffset
  }

  return (
    <SafeAreaView className='bg-background'>
      <View className='h-full flex mb-4'>
        <Header isScrolling={isScrolling} />
        <ScrollView
          onScroll={handleScroll}
          scrollEventThrottle={16}
          showsVerticalScrollIndicator={false}
        >
          <MainSlider />
          <SliderDetail navigation={navigation} />
          <View className='flex flex-col gap-8 last:mb-20'>
            <HomeSection
              navigation={navigation}
              title='Yeni'
              data={HomeNewData}
            />
            <HomeSection
              navigation={navigation}
              title='Sana Özel'
              data={HomeSanaOzelData}
            />
            <HomeSection title='Korku' data={HomeKorkuData} />
            <HomeSection title='Dram' data={HomeDramData} />
            <HomeSection title='Aksiyon' data={HomeAksiyonData} />
            <HomeSection title='Romantik' data={HomeRomantikData} />
            <HomeSection title='Bilim Kurgu' data={HomeBilimKurguData} />
            <HomeSection title='Çocuk' data={HomeCocukData} />
          </View>
        </ScrollView>
      </View>
    </SafeAreaView>
  )
}

export default HomeScreen
