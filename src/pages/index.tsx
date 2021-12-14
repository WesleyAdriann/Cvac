import React, { useRef } from 'react'
import { NavigationContainer, useNavigationContainerRef } from '@react-navigation/native'
import { createNativeStackNavigator } from '@react-navigation/native-stack'
import analytics from '@react-native-firebase/analytics'

import { AppHeader } from '../atomic'

import { Login } from './Login'

const Stack = createNativeStackNavigator()

export const Pages: React.FC = () => {
  const routeNameRef = useRef<string>()
  const navigationRef = useNavigationContainerRef()

  return (
    <NavigationContainer
      ref={navigationRef}
      onReady={() => {
        routeNameRef.current = navigationRef?.current?.getCurrentRoute()?.name
      }}
      onStateChange={async () => {
        const previousRouteName = routeNameRef.current
        const currentRouteName = navigationRef?.current?.getCurrentRoute()?.name

        if (previousRouteName !== currentRouteName) {
          await analytics().logScreenView({
            screen_name: `/cvac/${currentRouteName}`,
            screen_class: currentRouteName
          })
        }
        routeNameRef.current = currentRouteName
      }}
    >
      <Stack.Navigator initialRouteName='Login' screenOptions={{ header: (props) => <AppHeader {...props}/> }}>
        <Stack.Screen name='Login' component={Login} options={{ headerShown: false }} />
      </Stack.Navigator>
    </NavigationContainer>
  )
}
