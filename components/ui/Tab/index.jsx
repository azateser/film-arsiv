import React, { useState } from 'react'
import { Text, TouchableOpacity, View } from 'react-native'
import { ScrollView } from 'react-native-gesture-handler'

const Tab = ({ tabs }) => {
  const [activeTab, setActiveTab] = useState(0)

  return (
    <View className='mt-8 px-5'>
      <ScrollView
        horizontal
        contentContainerStyle={{ display: 'flex', gap: 12 }}
      >
        {tabs.map((tab, index) => (
          <TouchableOpacity
            className={`border-b-2 border-solid px-4 py-2 ${
              activeTab === index ? 'border-primary' : ''
            }`}
            key={index}
            onPress={() => setActiveTab(index)}
          >
            <Text
              className={`text-lg ${
                activeTab === index
                  ? 'text-primary font-inter600'
                  : 'text-white font-inter500'
              }`}
            >
              {tab.title}
            </Text>
          </TouchableOpacity>
        ))}
      </ScrollView>
      <View className='mt-5'>{tabs[activeTab]?.content}</View>
    </View>
  )
}

export default Tab
