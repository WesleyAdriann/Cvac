import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { useAppSelector } from '../../store'

import { HomeTemplate } from '../../atomic'

import { TAuthItem, TMenuItem } from '../../atomic/templates/HomeTemplate'

export const Home: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const session = useAppSelector((state) => state.sessionReducer)

  const onMenuItem = (item: TMenuItem) => {
    switch (item) {
      case 'calendar':
        return null
      case 'local':
        return null
      case 'notification':
        return null
      case 'wallet':
        return null
    }
  }

  const onAuthItem = (item: TAuthItem) => {
    switch (item) {
      case 'login':
        return navigation.push('login')
      case 'logout':
        return navigation.push('logout')
      case 'register':
        return navigation.push('register')
    }
  }

  return (
    <HomeTemplate
      isAuthenticated={session.isAuth}
      username={session.user?.displayName ?? ''}
      onPressAuthItem={onAuthItem}
      onPressMenuItem={onMenuItem}
    />
  )
}
