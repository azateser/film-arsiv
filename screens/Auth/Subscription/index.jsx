import React, { useState } from 'react'
import { SafeAreaView, View, Text } from 'react-native'
import AnimatedBackground from '@/screens/Auth/components/AnimatedBackground'
import Button from '@/components/ui/Button'
import AuthHeader from '@/screens/Auth/components/Header'
import SubscriptionBox from './components/SubscriptionBox'
import { SubscriptionPlanData } from 'mocks/Subscriptions'

export default SubscriptionScreen = ({ navigation }) => {
  const [selectedPlan, setSelectedPlan] = useState(1)
  return (
    <SafeAreaView className='bg-background'>
      <View className='h-full flex'>
        <AnimatedBackground gradient='long' stop duration={100000} />
        <View className='flex items-center justify-end pb-4 h-full px-8 gap-20'>
          <AuthHeader title='Abone olarak Film Arşivin Planlara Özel Ayrıcalıklarından Faydalanabilirsiniz' />
          <View className='flex gap-6'>
            <View>
              <View className='flex gap-4 mb-14'>
                {SubscriptionPlanData.map(plan => (
                  <SubscriptionBox
                    active={selectedPlan === plan.id}
                    key={plan.id}
                    plan={plan}
                    onPress={() => setSelectedPlan(plan.id)}
                  />
                ))}
              </View>
              <Button
                title='Devam Et'
                onPress={() => navigation.navigate('SelectProfile')}
              />
            </View>
          </View>
        </View>
      </View>
    </SafeAreaView>
  )
}
