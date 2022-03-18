import React, { useState, useEffect, useCallback } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { NotificationsTemplate } from '~/atomic'
import { usePushNotification } from '~/hooks'
import { useAppDispatch, useAppSelector, notificationsActions } from '~/store'

export const Notifications: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const { customNotifications, defaultNotifications, update } = useAppSelector((state) => state.notifications)
  const [isLoading, setIsLoading] = useState(true)

  const pushNotification = usePushNotification()

  const onPressCreate = () => navigation.push('registerNotifications')

  const onPressNotification = () => {
    // logger(TAG, x)
  }

  const getNotifications = useCallback(async () => {
    const notifications = await pushNotification.getLocal()
    dispatch(notificationsActions.setNotifications(notifications))
    setIsLoading(false)
  }, [dispatch, pushNotification])

  useEffect(() => {
    getNotifications()
  }, [getNotifications, update])

  return (
    <NotificationsTemplate
      onPressCreate={onPressCreate}
      onPressNotification={onPressNotification}
      isLoading={isLoading}
      defaultNotifications={defaultNotifications}
      customNotifications={customNotifications}
    />
  )
}
