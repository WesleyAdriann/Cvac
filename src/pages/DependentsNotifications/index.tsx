import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { DependentsNotificationsTemplate } from '~/atomic'
import { notificationsActions, useAppDispatch, useAppSelector } from '~/store'

export const DependentsNotification: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const dependents = useAppSelector((state) => state.userProfileReducer.depentents)

  const onPress = () => navigation.push('notifications')
  return <DependentsNotificationsTemplate onPress={onPress} dependents={dependents ?? {}} />
}
