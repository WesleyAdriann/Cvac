import React, { useEffect } from 'react'
import { StatusBar } from 'react-native'
import SplashScreen from 'react-native-splash-screen'

import { useSessionControl } from '../hooks/useSessionControl'

import { Navigator } from './Navigator'
import { PushNotificationConfigure } from '../hooks'

PushNotificationConfigure()

export const Pages = () => {
  useSessionControl()

  useEffect(() => {
    SplashScreen.hide()
  }, [])

  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Navigator />
    </>
  )
}
