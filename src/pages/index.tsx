import React from 'react'
import { StatusBar } from 'react-native'

import { useSessionControl } from '../hooks/useSessionControl'

import { Navigator } from './Navigator'

export const Pages = () => {
  useSessionControl()
  return (
    <>
      <StatusBar barStyle='dark-content' />
      <Navigator />
    </>
  )
}
