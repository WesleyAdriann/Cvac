import { useCallback, useMemo } from 'react'
import PushNotification, { Importance, PushNotificationScheduledLocalObject } from 'react-native-push-notification'
import PushNotificationIOS from '@react-native-community/push-notification-ios'

import { useAppSelector } from '~/store'
import { logger } from '~/utils'

const TAG = 'usePushNotification'
const PUSH_CHANNEL = 'cvacPushChannel'

interface ICreateLocal {
  message: string,
  date: Date,
  type?: 'default' | 'custom',
  dependentId?: string
  [key: string]: any
}

export const PushNotificationConfigure = () => {
  PushNotification.configure({
    onRegister: (token) => logger(TAG, 'onRegister token', token),
    onNotification: (notification) => {
      logger(TAG, 'onNotification', notification)
      notification.finish(PushNotificationIOS.FetchResult.NoData)
    },
    onRegistrationError: (error: Error) => logger(TAG, 'error in configure push', error.message),
    popInitialNotification: true,
    requestPermissions: true
  })

  PushNotification.channelExists(PUSH_CHANNEL, (exists) => {
    if (!exists) {
      PushNotification.createChannel({
        channelId: PUSH_CHANNEL,
        channelName: PUSH_CHANNEL,
        soundName: 'default',
        importance: Importance.HIGH,
        vibrate: true
      },
      (created) => logger(TAG, 'createChannel', created)
      )
    }
  })
}

export const usePushNotification = () => {
  const dependentId = useAppSelector((state) => state.notifications.dependentId)

  const createLocal = useCallback(({ message, date, type = 'default', dependent = dependentId, ...infos }: ICreateLocal) => {
    logger(TAG, 'local notification')
    PushNotification.localNotificationSchedule({
      channelId: PUSH_CHANNEL,
      title: 'CVAC',
      message,
      userInfo: { type, dependentId: dependent, ...infos },
      date,
      allowWhileIdle: false,
      repeatTime: 1
    })
  }, [dependentId])

  const getLocal = useCallback((): Promise<{custom: PushNotificationScheduledLocalObject[], default: PushNotificationScheduledLocalObject[]}> => (
    new Promise((resolve) => {
      const handler = (notifications: PushNotificationScheduledLocalObject[]) => {
        const response = {
          custom: [] as PushNotificationScheduledLocalObject[],
          default: [] as PushNotificationScheduledLocalObject[]
        }
        notifications.forEach((notification) => {
          const type = notification.data.type as 'custom' | 'default'
          if (notification.data.dependentId === dependentId) {
            response[type as 'custom' | 'default'].push(notification)
          }
        })
        resolve(response)
      }
      PushNotification.getScheduledLocalNotifications(handler)
    })
  ), [dependentId])

  const deleteLocal = useCallback((id: string) => {
    PushNotification.cancelLocalNotification(id)
  }, [])

  return useMemo(() => ({
    createLocal,
    getLocal,
    deleteLocal
  }), [createLocal, deleteLocal, getLocal])
}
