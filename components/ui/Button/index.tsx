import React from 'react'
import { TouchableOpacity, Text, View } from 'react-native'

type Variant = 'default' | 'secondary' | 'secondary-outline' | 'outline'

type ButtonProps = {
  title: string
  variant?: Variant
  startIcon?: React.ReactNode
  centerRightIcon?: React.ReactNode
  centerLeftIcon?: React.ReactNode
  className?: string
  textStyles?: string
}

const Button: React.FC<ButtonProps> = ({
  title,
  variant = 'default',
  startIcon,
  centerRightIcon,
  centerLeftIcon,
  className,
  textStyles,
  ...props
}) => {
  const getButtonVariantStyle = (): string => {
    const variantStyles: Record<Variant, string> = {
      default: 'bg-primary border-primary',
      secondary: '!bg-secondary border-secondary',
      'secondary-outline': '!bg-secondary border-outline',
      outline: '!bg-transparent border-secondary',
    }
    return variantStyles[variant]
  }

  const getButtonTextStyle = (): string => {
    const textStyles: Record<Variant, string> = {
      default: 'text-text',
      secondary: 'text-white',
      'secondary-outline': 'text-white',
      outline: 'text-white',
    }
    return textStyles[variant]
  }

  return (
    <TouchableOpacity
      className={`flex flex-row justify-center relative border items-center py-4 rounded-xl min-w-full ${getButtonVariantStyle()} ${className}`}
      {...props}
    >
      {startIcon && <View className='mr-2 absolute left-5'>{startIcon}</View>}
      {centerLeftIcon && <View className='mr-2'>{centerLeftIcon}</View>}
      <Text
        className={`font-bold font-inter700 text-base ${getButtonTextStyle()} ${textStyles}`}
      >
        {title}
      </Text>
      {centerRightIcon && <View className='ml-2'>{centerRightIcon}</View>}
    </TouchableOpacity>
  )
}

export default Button
