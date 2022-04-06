import React, { useMemo } from 'react'
import { PushNotificationScheduledLocalObject } from 'react-native-push-notification'
import { format } from 'date-fns'
import ptBR from 'date-fns/locale/pt-BR'

import { IPushNotification } from '~/types'

import { AppPage, IAppPage, NotificationItem } from '../../molecules'
import { Text, Flex, Button } from '../../atoms'

export interface INotificationsTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  onPressCreate: () => void
  onPressNotification: (notification: IPushNotification | PushNotificationScheduledLocalObject, date: string) => void
  defaultNotifications: IPushNotification[]
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
          <Text size={24} align='center'>{!props.isLoading && 'Nenhuma notificação encontrada'}</Text>
        </Flex>
      )
    }

    const render: React.ReactNode[] = []

    const items = (title: string, notifications: IPushNotification[] | PushNotificationScheduledLocalObject[]) => (
      <React.Fragment key={render.length}>
        <Flex marginStyle='32px 0 8px'>
          <Text size={34}>
            {title}
          </Text>
        </Flex>
        {
          notifications.map((notification) => {
            const date = {
              day: format(notification.date, 'dd'),
              month: format(notification.date, 'MMMM', { locale: ptBR }),
              year: format(notification.date, 'yyyy')
            }
            return (
              <NotificationItem
                key={notification.id}
                {...date}
                title={notification.data.vaccine ? notification.data.vaccine : notification.message}
                onPress={() =>
                  onPressNotification(
                    notification,
                    `${date.day} de ${date.month} de ${date.year} às ${format(notification.date, "HH'h'mm")}`
                  )
                }
                descriptions={[
                  notification.data.dose ? `${notification.calendar} - ${notification.data.dose}` : '',
                  format(notification.date, "HH'h'mm")
                ]}
              />
            )
          })
        }
      </React.Fragment>
    )

    if (defaultNotifications.length) render.push(items('Lembretes Padrões', defaultNotifications))
    if (customNotifications.length) render.push(items('Lembretes Criados', customNotifications))

    return render
  }, [customNotifications, defaultNotifications, onPressNotification, props.isLoading])

  return (
    <AppPage {...props} testID={testID} padding={0}>

      <Flex scroll contentContainerStyle={{ paddingHorizontal: 16 }}>
        {renderItems}
      </Flex>

      <Flex paddingStyle={16}>
        <Button
          onPress={onPressCreate}
          text='Criar Lembrete'
          mode='contained'
        />
      </Flex>
    </AppPage>
  )
}
