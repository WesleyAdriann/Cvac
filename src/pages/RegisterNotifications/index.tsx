import React from 'react'

import { RegisterNotificationsTemplate } from '~/atomic'
import { IRegisterNotificationsFormInputs } from '~/atomic/organisms'
import { usePushNotification } from '~/hooks'


export const RegisterNotifications: React.FC = () => {

  const pushNotification = usePushNotification()

  const onSubmit = (form: IRegisterNotificationsFormInputs) => {
    pushNotification.createLocal(form.description, form.date, form.hour)

  }



  return <RegisterNotificationsTemplate form={{ onSubmit }} />
}

