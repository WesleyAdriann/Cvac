import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { DependentsNotificationsTemplate } from '~/atomic'
import { notificationsActions, useAppDispatch, useAppSelector } from '~/store'

export const DependentsNotification: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const dependents = useAppSelector((state) => state.userProfile.depentents)

  const onPress = (dependentId: string) => {
    dispatch(notificationsActions.setDependentId(dependentId))
    navigation.push('notifications')
  }

  return <DependentsNotificationsTemplate onPress={onPress} dependents={dependents ?? {}} />
}
