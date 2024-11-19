import React, { useEffect } from 'react'
import * as SplashScreen from 'expo-splash-screen'
import { useAppFonts } from '@/hooks/fonts'
import { StatusBar } from 'expo-status-bar'
import ScreenNavigation from '@/screens/index'
import '@/global.css'
import { GestureHandlerRootView } from 'react-native-gesture-handler'
import { Text } from 'react-native'

SplashScreen.preventAutoHideAsync()

export default function App() {
  const fontsLoaded = useAppFonts()

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync()
      }
    }

    hideSplashScreen()
  }, [fontsLoaded])

  if (!fontsLoaded) {
    return null
  }
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <StatusBar style='light' />
      <ScreenNavigation />
    </GestureHandlerRootView>
  )
}
