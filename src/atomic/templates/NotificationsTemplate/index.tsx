import React from 'react'

import { AppPage, IAppPage } from '../../molecules'
import { Text, Flex, Button } from '../../atoms'

export interface INotificationsTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  onPressCreate: () => void
  onPressNotification: () => void
}

export const NotificationsTemplate: React.FC<INotificationsTemplate> = ({
  testID = 'NotificationsTemplate',
  onPressCreate,
  onPressNotification,
  ...props
}) => {
  return (
    <AppPage {...props} testID={testID}>
      <Flex flex={1}>
        <Flex marginStyle='0 0 32px'>
          <Text size={34}>
            Lembretes Padrões
          </Text>
          <Button
            onPress={onPressNotification}
            text='Vacina X'
            mode='outlined'
            marginStyle='16px 0 0'
          />
          <Button
            onPress={onPressNotification}
            text='Vacina Y'
            mode='outlined'
            marginStyle='16px 0 0'
          />
        </Flex>
        <Flex>
          <Text size={34}>
            Lembretes Criados
          </Text>
          <Button
            onPress={onPressNotification}
            text='Nome x'
            mode='outlined'
            marginStyle='16px 0 0'
          />
        </Flex>
      </Flex>
      <Button
        onPress={onPressCreate}
        text='Criar Lembrete'
        mode='contained'
      />
    </AppPage>
  )
}
