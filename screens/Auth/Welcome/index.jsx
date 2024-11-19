import React from 'react'
import { SafeAreaView, View } from 'react-native'
import AnimatedBackground from '@/screens/Auth/components/AnimatedBackground'
import Button from '@/components/ui/Button'
import {
  GoogleIcon,
  MailIcon,
  SkipIcon,
  RegisterIcon,
} from '@/assets/icons/Auth'
import AuthHeader from '@/screens/Auth/components/Header'

export default WelcomeScreen = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-background'>
      <View className='h-full flex'>
        <AnimatedBackground stop duration={100000} />
        <View className='flex items-center justify-end pb-4 h-full px-8 gap-14'>
          <AuthHeader title='Üye olarak, kaldığın yerden devam edebilir, listeler oluşturabilir ve indirme seçeneğinden faydalanabilirsin.' />
          <View>
            <Button
              startIcon={<MailIcon />}
              onPress={() => navigation.navigate('Login')}
              title='Eposta ile giriş yap'
            />

            <Button
              startIcon={<RegisterIcon />}
              variant='secondary-outline'
              title='Yeni hesap oluştur'
              onPress={() => navigation.navigate('Register')}
              style={{ marginTop: 10 }}
            />

            <Button
              startIcon={<GoogleIcon />}
              variant='secondary'
              title='Google ile Giriş Yap'
              style={{ marginTop: 10 }}
            />

            <Button
              centerRightIcon={<SkipIcon />}
              variant='outline'
              title='Atla'
              style={{ marginTop: 20 }}
              onPress={() => navigation.navigate('Home')}
            />
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
