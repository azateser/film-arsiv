import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

const Button = ({
  title,
  variant = 'default',
  startIcon,
  centerRightIcon,
  ...props
}) => {
  const buttonVariantStyle = () => {
    switch (variant) {
      case 'default':
        return 'bg-primary border-primary'
      case 'secondary':
        return '!bg-secondary border-secondary'
      case 'outline':
        return '!bg-transparent border-secondary'
    }
  }

  const buttonTextStyle = () => {
    switch (variant) {
      case 'default':
        return 'text-text'
      case 'secondary':
        return 'text-white'
      case 'outline':
        return 'text-white'
    }
  }

  return (
    <TouchableOpacity
      className={`flex flex-row justify-center relative border items-center py-4 rounded-xl min-w-full ${buttonVariantStyle()}`}
      {...props}
    >
      {startIcon && <View className='mr-2 absolute left-5'>{startIcon}</View>}
      <Text className={`font-bold text-base ${buttonTextStyle()}`}>
        {title}
      </Text>
      {centerRightIcon && <View className='ml-2'>{centerRightIcon}</View>}
    </TouchableOpacity>
  )
}

export default Button
