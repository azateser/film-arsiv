import React from 'react';
import { SafeAreaView, View, Text, StyleSheet } from 'react-native';
import AnimatedBackground from './components/AnimatedBackground';
import LogoSVG from '../../assets/global/Logo';
import Button from '../../components/ui/Button/Button';
import GoogleSVGIcon from '../../assets/icons/Welcome/google';
import MailSVGIcon from '../../assets/icons/Welcome/mail';
import SkipSVGIcon from '../../assets/icons/Welcome/skip';

const WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className="bg-background">
      <View className="h-full flex mb-4">
        <AnimatedBackground stop duration={100000} />

        <View className="flex items-center justify-end h-full px-8 gap-8">
          <LogoSVG />
          <Text className="text-white text-center text-sm opacity-75">
            Üye olarak, kaldığın yerden devam edebilir, listeler oluşturabilir ve indirme seçeneğinden faydalanabilirsin.
          </Text>
          <View>
            <Button startIcon={<MailSVGIcon />} title="Eposta ile giriş yap" />

            <Button startIcon={<GoogleSVGIcon />} variant="secondary" title="Google ile giriş yap" style={{ marginTop: 10 }} />

            <Button centerRightIcon={<SkipSVGIcon />} variant="outline" title="Atla" style={{ marginTop: 20 }} onPress={() => navigation.navigate('Home')} />
          </View>
        </View>
      </View>
    </SafeAreaView>
  );
}



export default WelcomeScreen;