import LogoSVG from '@/assets/global/Logo'
import {
  BookmarkLayoutIcon,
  DownloadLayoutIcon,
  ProfileLayoutIcon,
  SearchLayoutIcon,
} from '@/assets/icons/Layout'
import React from 'react'
import { Text, TouchableOpacity, View } from 'react-native'

const HeaderMenuItems = [
  {
    title: 'YENİ',
  },
  {
    title: 'POPÜLER',
  },
  {
    title: 'ÖNERİLEN',
  },
]

const Header = ({ bottomMenu = true }) => {
  return (
    <View className='px-5'>
      <View className='flex py-4 flex-row justify-between items-center'>
        <View className='flex flex-row items-center gap-6'>
          <TouchableOpacity>
            <BookmarkLayoutIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <DownloadLayoutIcon />
          </TouchableOpacity>
        </View>
        <LogoSVG width={131} height={44} />
        <View className='flex flex-row items-center gap-6'>
          <TouchableOpacity>
            <SearchLayoutIcon />
          </TouchableOpacity>
          <TouchableOpacity>
            <ProfileLayoutIcon />
          </TouchableOpacity>
        </View>
      </View>
      {bottomMenu && (
        <View className='flex flex-row justify-between'>
          {HeaderMenuItems.map((item, index) => (
            <TouchableOpacity key={index}>
              <Text className='text-white text-lg font-inter700'>
                {item.title}
              </Text>
            </TouchableOpacity>
          ))}
          <TouchableOpacity>
            <Text className='font-inter700 text-lg flex flex-row'>
              {'AVANTAJLAR'.split('').map((char, index) => (
                <Text
                  key={index}
                  className={index % 2 === 0 ? 'text-white' : 'text-primary'}
                >
                  {char}
                </Text>
              ))}
            </Text>
          </TouchableOpacity>
        </View>
      )}
    </View>
  )
}

export default Header
