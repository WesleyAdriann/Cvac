import React from 'react'

import { useSessionControl } from '../hooks/useSessionControl'

import { Navigator } from './Navigator'

export const Pages = () => {
  useSessionControl()
  return <Navigator />
}
