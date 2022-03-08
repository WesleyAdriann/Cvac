import PushNotification, { Importance } from 'react-native-push-notification'
import PushNotificationIOS from '@react-native-community/push-notification-ios'

import { useAppSelector } from '~/store'
import { logger } from '~/utils'

const TAG = 'usePushNotification'
const PUSH_CHANNEL = 'cvacPushChannel'

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
  const userId = useAppSelector((state) => state.userProfileReducer.uid)

  const createLocal = (message: string, date: Date) => {
    logger(TAG, 'local notification')
    PushNotification.localNotificationSchedule({
      channelId: PUSH_CHANNEL,
      title: 'CVAC',
      message,
      userInfo: { userId: userId },
      date,
      allowWhileIdle: false,
      repeatTime: 1
    })
  }

  return {
    createLocal
  }
}
