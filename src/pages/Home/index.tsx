import React, { useMemo, useEffect } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import firestore from '@react-native-firebase/firestore'

import {
  useAppSelector,
  useAppDispatch,
  sessionActions,
  calendarsActions
} from '~/store'
import { HomeTemplate } from '~/atomic'
import { TAuthItem, TMenuItem } from '~/atomic/templates/HomeTemplate'
import { isEmpty, logger } from '~/utils'

export const Home: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const TAG = 'Home'
  const dispatch = useAppDispatch()

  const {
    userProfileReducer: userProfile,
    sessionReducer: session,
    calendarsReducer: calendars
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
    case 'vaccineCertificate':
      return navigation.push('dependentsVaccineCertificate')
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

  const getCalendars = async () => {
    if (!isEmpty(calendars)) return null

    try {
      const calendarsSnap = await firestore().collection('calendar').get()
      const calendars = calendarsSnap.docs.reduce((acc, item) => Object.assign(acc, { [item.id]: item.data() }), {})
      dispatch(calendarsActions.setCalendars(calendars))
    } catch (_error) {
      const error = _error as Error
      logger(TAG, 'error to get calendars', error.message)
    }
  }

  useEffect(() => {
    getCalendars()
  }, [])

  return (
    <HomeTemplate
      isAuthenticated={session.isAuth}
      username={displayName}
      onPressAuthItem={onAuthItem}
      onPressMenuItem={onMenuItem}
    />
  )
}
