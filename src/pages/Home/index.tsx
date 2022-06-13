import React, { useMemo, useEffect, useCallback, useState } from 'react'
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
import { IDialog } from '~/atomic/molecules'

export const Home: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const TAG = 'Home'
  const dispatch = useAppDispatch()

  const [dialog, setDialog] = useState<IDialog>({ visible: false })

  const {
    userProfile,
    session,
    calendars,
    vaccines
  } = useAppSelector((state) => ({
    userProfile: state.userProfile,
    session: state.session,
    calendars: state.calendars,
    vaccines: state.vaccines
  }))

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

  const getCalendars = useCallback(async () => {
    if (!isEmpty(calendars)) return null

    logger(TAG, 'try to get calendars')
    try {
      const calendarsSnap = await colletionCalendar.get()
      const calendars =
        calendarsSnap.docs.reduce((acc, item) =>
          Object.assign(acc, {
            [item.id]: {
              ...item.data(),
              name: item.data().name.trim()
            }
          }), {}
        )
      dispatch(calendarsActions.setCalendars(calendars))
    } catch (_error) {
      const error = _error as Error
      logger(TAG, 'error to get calendars', error.message)
      if (dialog.visible) return
      setDialog({
        visible: true,
        title: 'Erro!',
        content: 'Houve um erro para carregar as vacinas',
        onPressOk: () => navigation.replace('home')
      })
    }
  }, [calendars, dialog.visible, dispatch, navigation])

  const getVaccines = useCallback(async () => {
    if (!isEmpty(vaccines)) return null

    logger(TAG, 'try to get vaccines')
    try {
      const vaccinesSnap = await collectionVaccine.get()
      const vaccines = vaccinesSnap.docs.reduce((acc, item) => {
        const vaccine = item.data()
        return Object.assign(acc, { [item.id]: vaccine })
      }, {})
      dispatch(vaccinesActions.setVaccines(vaccines))
    } catch (_error) {
      const error = _error as Error
      logger(TAG, 'error to get vaccines', error.message)
      if (dialog.visible) return
      setDialog({
        visible: true,
        title: 'Erro!',
        content: 'Houve um erro para carregar as vacinas',
        onPressOk: () => navigation.replace('home')
      })
    }
  }, [dialog.visible, dispatch, navigation, vaccines])

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
      if (dialog.visible) return
      setDialog({
        visible: true,
        title: 'Erro!',
        content: 'Houve um erro para carregar seus dependentes',
        onPressOk: () => navigation.replace('home')
      })
    }
  }, [dialog.visible, dispatch, navigation, userProfile.depentents, userProfile.uid])

  useEffect(() => {
    getCalendars()
    getVaccines()
  }, [])

  useEffect(() => {
    if (session.isAuth && !userProfile.creatingUser) getDependents()
  }, [session.isAuth, userProfile.creatingUser])

  useEffect(() => {
    dispatch(userProfileActions.setCreatingUser(false))
  }, [dispatch])

  return (
    <HomeTemplate
      isAuthenticated={session.isAuth}
      username={displayName}
      onPressAuthItem={onAuthItem}
      onPressMenuItem={onMenuItem}
      authIsLoading={session.isLoading}
      dialog={{
        ...dialog,
        onClose: () => setDialog({ visible: false })
      }}
    />
  )
}
