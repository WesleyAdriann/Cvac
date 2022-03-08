import PushNotification, { Importance } from 'react-native-push-notification'
import PushNotificationIOS from '@react-native-community/push-notification-ios'

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
  const createLocal = (message: string, date: string, hour: string) => {
    logger(TAG, 'local notification')
    PushNotification.localNotificationSchedule({
      channelId: PUSH_CHANNEL,
      title: 'CVAC',
      message,
      userInfo: { foo: 'bar' },
      date: new Date(Date.now() + 5 * 1000), // in 60 secs
      allowWhileIdle: false, // (optional) set notification to work while on doze, default: false

      /* Android Only Properties */
      repeatTime: 1 // (optional) Increment of configured repeatType. Check 'Repeating Notifications' section for more info.

    })
  }

  return {
    createLocal
  }
}
