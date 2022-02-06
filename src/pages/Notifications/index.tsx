import React from 'react'

import { NotificationsTemplate } from '../../atomic'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

export const Notifications: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const onPress = () => navigation.push('registerNotifications')

  return (
    <NotificationsTemplate
      onPress={onPress}
    />
  )
}
