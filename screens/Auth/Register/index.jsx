import React from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import AnimatedBackground from '@/screens/Auth/components/AnimatedBackground'
import Button from '@/components/ui/Button'
import {
  GoogleIcon,
  GoBackIcon,
  EmailIcon,
  PasswordIcon,
  UserIcon,
} from '@/assets/icons/Auth'
import Input from '@/components/ui/Input'
import Checkbox from 'expo-checkbox'
import AuthHeader from '@/screens/Auth/components/Header'

export default RegisterScreen = ({ navigation }) => {
  const [checked, setChecked] = React.useState(false)
  return (
    <SafeAreaView className='bg-background'>
      <View className='h-full flex'>
        <AnimatedBackground gradient='long' stop duration={100000} />
        <View className='flex items-center justify-end pb-4 h-full px-8 gap-11'>
          <AuthHeader
            title=' Üye olarak, kaldığın yerden devam edebilir, listeler oluşturabilir ve
        indirme seçeneğinden faydalanabilirsin.'
          />
          <View className='flex gap-6'>
            <View className='flex gap-4'>
              <Input icon={<UserIcon />} placeholder='Tam Adınız' />
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
              <Input
                icon={<PasswordIcon />}
                placeholder='Tekrar Şifreniz'
                type='password'
              />
              <View className='flex flex-row gap-3 w-11/12 mb-6'>
                <Checkbox
                  style={{
                    borderRadius: 6,
                    borderColor: '#D9D9D9',
                    marginTop: 5,
                    width: 24,
                    height: 24,
                  }}
                  value={checked}
                  onValueChange={setChecked}
                  color={checked ? '#DBFA3A' : undefined}
                />
                <Text className='text-white/75 flex font-inter500 flex-shrink'>
                  Kayıt olarak{' '}
                  <Text className='text-primary font-inter700 underline'>
                    Hizmet ve Şartları{' '}
                  </Text>
                  kabul etmiş olursunuz.
                </Text>
              </View>
              <Button
                title='Kayıt Ol'
                onPress={() => navigation.navigate('Subscription')}
              />
            </View>
            <View>
              <Button
                startIcon={<GoogleIcon />}
                variant='secondary'
                title='Google ile Kayıt Ol'
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
