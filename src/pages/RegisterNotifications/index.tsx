import React from 'react'

import { RegisterNotificationsTemplate } from '~/atomic'
import { IRegisterNotificationsFormInputs } from '~/atomic/organisms'
import { usePushNotification } from '~/hooks'
import { logger } from '~/utils'

export const RegisterNotifications: React.FC = () => {
  const TAG = 'RegisterNotifications'
  const pushNotification = usePushNotification()

  const onSubmit = ({ date, hour, description }: IRegisterNotificationsFormInputs) => {
    const parseNotificationDateTime = date.replace('00:00', hour.match(/\d{2}:\d{2}/g)?.shift() ?? '')
    logger(TAG, 'form', parseNotificationDateTime)
    pushNotification.createLocal(description, new Date(parseNotificationDateTime))
  }

  return (
    <RegisterNotificationsTemplate
      form={{ onSubmit }}
    />
  )
}
