import { EyeOffIcon, EyeOnIcon } from '@/assets/icons/Auth'
import React from 'react'
import { TouchableOpacity, Text, View, TextInput } from 'react-native'

type InputProps = {
  icon?: React.ReactNode
  placeholder?: string
  keyboardType?: 'default' | 'email-address' | 'numeric' | 'phone-pad'
  type?: 'default' | 'password'
  title?: string
  className?: string
  onChangeText?: (text: string) => void
}

const Input: React.FC<InputProps> = ({
  icon,
  placeholder,
  keyboardType = 'default',
  type = 'default',
  title,
  onChangeText,
  className,
  ...props
}) => {
  const [isFocused, setIsFocused] = React.useState(false)

  const [showPassword, setShowPassword] = React.useState(false)
  return (
    <View className={className}>
      {title && (
        <Text className='text-lg mb-2 font-inter600 text-white/50'>
          {title}
        </Text>
      )}
      <View
        className={`flex flex-row relative bg-white min-h-16 rounded-xl`}
        {...props}
      >
        {icon && (
          <View
            className={`flex items-center justify-center border border-solid min-w-16 rounded-l-xl 
            ${
              isFocused
                ? 'border-[#CAE832] bg-[#CAE832]'
                : 'bg-white border-[#D9D9D9]'
            }
   `}
          >
            {icon}
          </View>
        )}
        <View
          className={`relative flex flex-1 justify-start border border-[#D9D9D9] ${
            icon ? 'border-l-0 rounded-r-xl' : 'rounded-xl'
          }`}
        >
          <TextInput
            onBlur={() => setIsFocused(false)}
            onFocus={() => setIsFocused(true)}
            keyboardType={keyboardType}
            secureTextEntry={type === 'password' && !showPassword}
            className='text-lg h-[49px] rounded-r-xl font-inter500 placeholder:text-black/50 pl-4'
            placeholder={placeholder}
            onChangeText={onChangeText}
          />
          {type === 'password' && (
            <TouchableOpacity
              className='absolute right-0 rounded-r-xl h-16 w-16  items-center flex justify-center top-1/2 transform -translate-y-1/2'
              onPress={() => setShowPassword(!showPassword)}
            >
              <View>{showPassword ? <EyeOnIcon /> : <EyeOffIcon />}</View>
            </TouchableOpacity>
          )}
        </View>
      </View>
    </View>
  )
}

export default Input
