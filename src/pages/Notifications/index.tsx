import React from 'react'

import { NotificationsTemplate } from '../../atomic'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

export const Notifications: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const onPressCreate = () => navigation.push('registerNotifications')

  const onPressNotification = () => {}

  return (
    <NotificationsTemplate
      onPressCreate={onPressCreate}
      onPressNotification={onPressNotification}
    />
  )
}
