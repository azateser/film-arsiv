import React from 'react'
import { SafeAreaView, View } from 'react-native'
import AnimatedBackground from '@/screens/Auth/components/AnimatedBackground'
import Button from '@/components/ui/Button'
import {
  GoogleIcon,
  GoBackIcon,
  EmailIcon,
  PasswordIcon,
} from '@/assets/icons/Auth'
import Input from '@/components/ui/Input'
import AuthHeader from '@/screens/Auth/components/Header'

export default LoginScreen = ({ navigation }) => {
  return (
    <SafeAreaView className='bg-background'>
      <View className='h-full flex'>
        <AnimatedBackground gradient='long' stop duration={100000} />
        <View className='flex items-center justify-end pb-4 h-full px-8 gap-14'>
          <AuthHeader title='Hemen Giriş Yapın ve Platformumuzun Ayrıcalıklarından Faydalanın' />
          <View className='flex gap-24'>
            <View className='flex gap-4'>
              <Input
                icon={<EmailIcon />}
                placeholder='E-Posta Adresiniz'
                keyboardType='email-address'
              />
              <Input
                icon={<PasswordIcon />}
                placeholder='Şifreniz'
                type='password'
              />
              <Button title='Giriş Yap' />
            </View>
            <View>
              <Button
                startIcon={<GoogleIcon />}
                variant='secondary'
                title='Google ile Giriş Yap'
                style={{ marginTop: 10 }}
              />

              <Button
                centerLeftIcon={<GoBackIcon />}
                variant='outline'
                title='Geri Dön'
                style={{ marginTop: 20 }}
                onPress={() => navigation.goBack()}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
