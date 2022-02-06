import React from 'react'

import { DependentsNotificationsTemplate } from '../../atomic'

import { NativeStackHeaderProps } from '@react-navigation/native-stack'

export const DependentsNotification: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const onPress = () => navigation.push('notifications')
  return <DependentsNotificationsTemplate onPress={onPress} />
}
