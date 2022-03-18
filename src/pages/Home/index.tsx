import React, { useMemo, useEffect, useCallback } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import {
  useAppSelector,
  useAppDispatch,
  sessionActions,
  userProfileActions,
  calendarsActions,
  vaccinesActions
} from '~/store'
import { HomeTemplate } from '~/atomic'
import { TAuthItem, TMenuItem } from '~/atomic/templates/HomeTemplate'
import { isEmpty, logger } from '~/utils'
import {
  collectionVaccine,
  collectionDependents,
  colletionCalendar,
  collectionUsers
} from '~/services/firebase'
import { IVaccineCalendar } from '~/types'

export const Home: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const TAG = 'Home'
  const dispatch = useAppDispatch()

  const {
    userProfileReducer: userProfile,
    sessionReducer: session,
    calendarsReducer: calendars,
    vaccinesReducer: vaccines
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
      return navigation.push(session.isAuth ? 'dependentsNotification' : 'login')
    case 'vaccineCertificate':
      return navigation.push(session.isAuth ? 'dependentsVaccineCertificate' : 'login')
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

    logger(TAG, 'try to get calendars')
    try {
      const calendarsSnap = await colletionCalendar.get()
      const calendars =
        calendarsSnap.docs.reduce((acc, item) =>
          Object.assign(acc, { [item.id]: item.data() }), {}
        )
      dispatch(calendarsActions.setCalendars(calendars))
    } catch (_error) {
      const error = _error as Error
      logger(TAG, 'error to get calendars', error.message)
    }
  }

  const getVaccines = async () => {
    if (!isEmpty(vaccines)) return null

    logger(TAG, 'try to get vaccines')
    try {
      const vaccinesSnap = await collectionVaccine.get()
      const vaccines = vaccinesSnap.docs.reduce((acc, item) => {
        const vaccine = item.data()
        const calendars: IVaccineCalendar[] = vaccine.calendars.map((calendar) => ({ ...calendar, id: calendar.id.id }))
        return Object.assign(acc, { [item.id]: { ...vaccine, calendars } })
      }, {})
      dispatch(vaccinesActions.setVaccines(vaccines))
    } catch (_error) {
      const error = _error as Error
      logger(TAG, 'error to get vaccines', error.message)
    }
  }

  const getDependents = useCallback(async () => {
    if (!isEmpty(userProfile.depentents)) return null

    logger(TAG, 'try to get dependents', userProfile.uid)
    try {
      const userRef = collectionUsers.doc(userProfile.uid ?? '')
      const dependentsSnap = await collectionDependents.where('userUid', '==', userRef).get()

      const dependents = dependentsSnap.docs.reduce((acc, item) =>
        Object.assign(acc, { [item.id]: { ...item.data(), userUid: undefined } }), {}
      )
      dispatch(userProfileActions.setDepentents(dependents))
      logger(TAG, 'success to get dependents', dependents)
    } catch (_error) {
      const error = _error as Error
      logger(TAG, 'error to get dependents', error.message)
    }
  }, [dispatch, userProfile.depentents, userProfile.uid])

  useEffect(() => {
    getCalendars()
    getVaccines()
  }, [])

  useEffect(() => {
    if (session.isAuth) getDependents()
  }, [session.isAuth])

  return (
    <HomeTemplate
      isAuthenticated={session.isAuth}
      username={displayName}
      onPressAuthItem={onAuthItem}
      onPressMenuItem={onMenuItem}
      authIsLoading={session.isLoading}
    />
  )
}
