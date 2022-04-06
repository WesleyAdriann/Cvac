import React, { useState, useEffect, useCallback } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { PushNotificationScheduledLocalObject } from 'react-native-push-notification'

import { NotificationsTemplate } from '~/atomic'
import { usePushNotification } from '~/hooks'
import { useAppDispatch, useAppSelector, notificationsActions } from '~/store'
import { ECalendarsName } from '~/utils'
import { IPushNotification } from '~/types'
import { IDialog } from '~/atomic/molecules'

export const Notifications: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const { notifications, calendars } = useAppSelector((state) => ({
    notifications: state.notifications,
    calendars: state.calendars
  }))
  const [isLoading, setIsLoading] = useState(true)
  const [dialog, setDialog] = useState<IDialog>({ visible: false })

  const pushNotification = usePushNotification()

  const onPressCreate = () => navigation.push('registerNotifications')

  const onDeleteNotification = (id: string, type: 'custom' | 'default') => {
    // pushNotification.deleteLocal(id)
    const newNotifications = notifications[`${type}Notifications`].filter((notification) => notification.id !== id)
    dispatch(notificationsActions.setNotifications({
      [type]: newNotifications
    }))
  }

  const onPressNotification = (notification: IPushNotification | PushNotificationScheduledLocalObject, date: string) => {
    setDialog({
      visible: true,
      content: `${notification.message}\n\n${date}`,
      btnCloseText: 'Deletar',
      onPressClose: () => onDeleteNotification(notification.id, notification.data.type)
    })
  }

  const getNotifications = useCallback(async () => {
    const notifications = await pushNotification.getLocal()
    const formatedDefault: IPushNotification[] = notifications.default.map((notification) => {
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
      dialog={{
        ...dialog,
        onClose: () => setDialog({ visible: false })
      }}
    />
  )
}
