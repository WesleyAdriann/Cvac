import React, { useMemo } from 'react'
import { PushNotificationScheduledLocalObject } from 'react-native-push-notification'

import { AppPage, IAppPage } from '../../molecules'
import { Text, Flex, Button } from '../../atoms'

export interface INotificationsTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  onPressCreate: () => void
  onPressNotification: () => void
  defaultNotifications: PushNotificationScheduledLocalObject[]
  customNotifications: PushNotificationScheduledLocalObject[]
}

export const NotificationsTemplate: React.FC<INotificationsTemplate> = ({
  testID = 'NotificationsTemplate',
  onPressCreate,
  onPressNotification,
  defaultNotifications,
  customNotifications,
  ...props
}) => {
  const renderItems = useMemo(() => {
    if (!defaultNotifications.length && !customNotifications.length) {
      return (
        <Flex justifyContent='center' flex={1}>
          <Text size={24} align='center'>Nenhuma notificação encontrada</Text>
        </Flex>
      )
    }

    const render: React.ReactNode[] = []

    const items = (title: string, notifications: PushNotificationScheduledLocalObject[]) => (
      <React.Fragment key={render.length}>
        <Flex marginStyle='32px 0 0'>
          <Text size={34}>
            {title}
          </Text>
        </Flex>
        {
          notifications.map((notification) => (
            <Button
              key={notification.id}
              onPress={onPressNotification}
              text={notification.message}
              mode='outlined'
              marginStyle='16px 0 0'
            />
          ))
        }
      </React.Fragment>
    )

    if (defaultNotifications.length) render.push(items('Lembretes Padrões', defaultNotifications))
    if (customNotifications.length) render.push(items('Lembretes Criados', customNotifications))

    return render
  }, [customNotifications, defaultNotifications, onPressNotification])

  return (
    <AppPage {...props} testID={testID}>
      <Flex flex={1} scroll>
        {renderItems}
      </Flex>
      <Button
        onPress={onPressCreate}
        text='Criar Lembrete'
        mode='contained'
      />
    </AppPage>
  )
}
