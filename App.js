import { useEffect } from "react"
import { Text, View } from "react-native";
import * as SplashScreen from "expo-splash-screen";
import { useAppFonts } from "./hooks/fonts";
import ScreenNavigation from "./screen";
import { StatusBar } from "expo-status-bar";

SplashScreen.preventAutoHideAsync();

export default function App() {
  const fontsLoaded = useAppFonts();

  useEffect(() => {
    async function hideSplashScreen() {
      if (fontsLoaded) {
        await SplashScreen.hideAsync();
      }
    }

    hideSplashScreen();
  }, [fontsLoaded]);

  if (!fontsLoaded) {
    return null;
  }

  return (

    <>
    <StatusBar style="light" />
  <ScreenNavigation />
  </>
  )
}
