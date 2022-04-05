import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { RegisterNotificationsTemplate } from '~/atomic'
import { IRegisterNotificationsFormInputs } from '~/atomic/organisms'
import { usePushNotification } from '~/hooks'
import { useAppDispatch, notificationsActions } from '~/store'

export const RegisterNotifications: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const dispatch = useAppDispatch()
  const pushNotification = usePushNotification()

  const onSubmit = ({ date, hour, description }: IRegisterNotificationsFormInputs) => {
    const parseNotificationDateTime = date.replace('00:00', hour.match(/\d{2}:\d{2}/g)?.shift() ?? '')
    pushNotification.createLocal({ message: description, date: new Date(parseNotificationDateTime), type: 'custom' })
    dispatch(notificationsActions.setUpdateNotifications())
    navigation.pop()
  }

  return (
    <RegisterNotificationsTemplate
      form={{ onSubmit }}
    />
  )
}
