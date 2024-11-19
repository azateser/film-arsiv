import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const SubscriptionBox = ({ plan, active, onPress }) => {
  return (
    <TouchableOpacity onPress={onPress} disabled={active}>
      <View
        key={`subscription-box-${plan.id}`}
        className={`flex flex-row w-full rounded-2xl h-36 ${
          active ? 'bg-[#2B2E37]' : 'bg-[#2B2E37]/50'
        }`}
      >
        <View
          className={`flex items-center justify-center w-36 rounded-l-2xl h-36 ${
            active ? 'bg-[#DBFA3A]' : 'bg-[#7D8089]/50'
          }`}
        >
          {React.cloneElement(plan.icon, { active })}
        </View>
        <View className='px-6 justify-center gap-3'>
          <Text className='text-white font-inter700 text-xl'>{plan.title}</Text>

          <View className='gap-2'>
            {plan.features.map(feature => (
              <View
                key={feature.id}
                className='flex flex-row items-center gap-2'
              >
                {feature.icon}
                <Text className='text-white/75 font-inter400 text-xs'>
                  {feature.text}
                </Text>
              </View>
            ))}
          </View>
        </View>
      </View>
    </TouchableOpacity>
  )
}

export default SubscriptionBox
