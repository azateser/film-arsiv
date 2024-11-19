import React from 'react'
import HomeScreen from '@/screens/Home/page'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'
import {
  CategoriesActiveIcon,
  CategoriesNormalIcon,
  HomeActiveIcon,
  HomeNormalIcon,
  MovieActiveIcon,
  MovieNormalIcon,
  SeriesActiveIcon,
  SeriesNormalIcon,
} from '@/assets/icons/Menu'

const Tab = createBottomTabNavigator()

const HomeNavigation = () => {
  return (
    <Tab.Navigator
      screenOptions={({ route }) => ({
        headerShown: false,
        tabBarIcon: ({ focused }) => {
          switch (route.name) {
            case 'Anasayfa':
              return focused ? <HomeActiveIcon /> : <HomeNormalIcon />
            case 'Filmler':
              return focused ? <MovieActiveIcon /> : <MovieNormalIcon />
            case 'Diziler':
              return focused ? <SeriesActiveIcon /> : <SeriesNormalIcon />
            case 'Kategoriler':
              return focused ? (
                <CategoriesActiveIcon />
              ) : (
                <CategoriesNormalIcon />
              )
            default:
              return null
          }
        },
        tabBarStyle: {
          height: 96,
          backgroundColor: '#121318',
          borderTopWidth: 0,
        },
        tabBarActiveTintColor: '#DBFA3A',
        tabBarInactiveTintColor: '#7D8089',
        tabBarIconStyle: {
          marginTop: 12,
        },
        tabBarLabelStyle: {
          marginTop: 10,
          fontSize: 14,
          fontFamily: 'Inter_700Bold',
        },
      })}
    >
      <Tab.Screen name='Anasayfa' component={HomeScreen} />
      <Tab.Screen name='Filmler' component={HomeScreen} />
      <Tab.Screen name='Diziler' component={HomeScreen} />
      <Tab.Screen name='Kategoriler' component={HomeScreen} />
    </Tab.Navigator>
  )
}

export default HomeNavigation
