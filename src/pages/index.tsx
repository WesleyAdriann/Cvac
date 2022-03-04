import React from 'react'
import { StatusBar } from 'react-native'

import { useSessionControl } from '../hooks/useSessionControl'

import { Navigator } from './Navigator'
import { PushNotificationConfigure } from '../hooks'

PushNotificationConfigure()

export const Pages = () => {
  useSessionControl()
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Navigator />
    </>
  )
}
