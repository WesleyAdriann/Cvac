import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { NotificationsTemplate } from '~/atomic'
import { usePushNotification } from '~/hooks'

export const Notifications: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const onPressCreate = () => navigation.push('registerNotifications')

  const onPressNotification = () => {

  }

  return (
    <NotificationsTemplate
      onPressCreate={onPressCreate}
      onPressNotification={onPressNotification}
    />
  )
}
