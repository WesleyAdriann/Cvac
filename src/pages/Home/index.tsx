import React, { useMemo } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { useAppSelector, useAppDispatch } from '../../store'
import { sessionActions } from '../../store/slices/Session'

import { HomeTemplate } from '../../atomic'

import { TAuthItem, TMenuItem } from '../../atomic/templates/HomeTemplate'

export const Home: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const dispatch = useAppDispatch()

  const {
    userProfileReducer: userProfile,
    sessionReducer: session
  } = useAppSelector((state) => state)

  const displayName = useMemo(() => {
    if (userProfile.name) return userProfile.name.split(' ').shift()
    return ''
  }, [userProfile.name])

  const onMenuItem = (item: TMenuItem) => {
    switch (item) {
      case 'calendar':
        return navigation.push('calendars')
      case 'local':
        return navigation.push('locations')
      case 'notification':
        return navigation.push('dependentsNotification')
      case 'wallet':
        return null
    }
  }

  const onAuthItem = (item: TAuthItem) => {
    switch (item) {
      case 'login':
        return navigation.push('login')
      case 'logout':
        return dispatch(sessionActions.startLogout())
      case 'register':
        return navigation.push('register')
    }
  }

  return (
    <HomeTemplate
      isAuthenticated={session.isAuth}
      username={displayName}
      onPressAuthItem={onAuthItem}
      onPressMenuItem={onMenuItem}
    />
  )
}
