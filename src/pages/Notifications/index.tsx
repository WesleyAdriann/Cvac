import React, { useState, useEffect, useCallback } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { NotificationsTemplate } from '~/atomic'
import { usePushNotification } from '~/hooks'
import { useAppDispatch, useAppSelector, notificationsActions } from '~/store'
import { ECalendarsName } from '~/utils'
import { INotification } from '~/types'

export const Notifications: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const { notifications, calendars } = useAppSelector((state) => ({
    notifications: state.notifications,
    calendars: state.calendars
  }))
  const [isLoading, setIsLoading] = useState(true)

  const pushNotification = usePushNotification()

  const onPressCreate = () => navigation.push('registerNotifications')

  const onPressNotification = () => {
    // logger(TAG, x)
  }

  const getNotifications = useCallback(async () => {
    const notifications = await pushNotification.getLocal()
    const formatedDefault: INotification[] = notifications.default.map((notification) => {
      const message: string = notification.message

      return {
        ...notification,
        message: message.split(' - ').pop() ?? '',
        calendar: ECalendarsName[calendars[notification.data.calendarId ?? ''].name],
        dose: notification.data.dose
      }
    })
    dispatch(notificationsActions.setNotifications({
      ...notifications,
      default: formatedDefault
    }))
    setIsLoading(false)
  }, [calendars, dispatch, pushNotification])

  useEffect(() => {
    getNotifications()
  }, [getNotifications, notifications.update])

  return (
    <NotificationsTemplate
      onPressCreate={onPressCreate}
      onPressNotification={onPressNotification}
      isLoading={isLoading}
      defaultNotifications={notifications.defaultNotifications}
      customNotifications={notifications.customNotifications}
    />
  )
}
