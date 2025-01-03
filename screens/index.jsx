import {
  NavigationContainer,
  NavigationIndependentTree,
} from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import WelcomeScreen from '@/screens/Auth/Welcome'
import HomeScreen from '@/screens/Home'
import LoginScreen from '@/screens/Auth/Login/index'
import RegisterScreen from '@/screens/Auth/Register/index'
import SubscriptionScreen from '@/screens/Auth/Subscription/index'
import SelectProfileScreen from '@/screens/Auth/SelectProfile/index'
import DetailScreen from './Detail'
import PlayerScreen from './Player'

const Stack = createNativeStackNavigator()

export default ScreenNavigation = () => {
  return (
    <NavigationContainer>
      <Stack.Navigator
        initialRouteName='Player'
        screenOptions={{ headerShown: false }}
      >
        <Stack.Screen
          name='Welcome'
          component={WelcomeScreen}
          options={{ animation: 'fade_from_bottom' }}
        />
        <Stack.Screen
          name='Login'
          component={LoginScreen}
          options={{ animation: 'fade_from_bottom' }}
        />
        <Stack.Screen
          name='Register'
          component={RegisterScreen}
          options={{ animation: 'fade_from_bottom' }}
        />
        <Stack.Screen
          name='Subscription'
          component={SubscriptionScreen}
          options={{ animation: 'fade_from_bottom' }}
        />
        <Stack.Screen
          name='SelectProfile'
          component={SelectProfileScreen}
          options={{ animation: 'fade_from_bottom' }}
        />
        <Stack.Screen name='Home' component={HomeScreen} />
        <Stack.Screen name='Detail' component={DetailScreen} />
        <Stack.Screen
          name='Player'
          component={PlayerScreen}
          options={{
            headerShown: false,
            orientation: 'landscape',
          }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
