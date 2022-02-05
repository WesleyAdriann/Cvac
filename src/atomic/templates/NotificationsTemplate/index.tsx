import React from 'react'

import { AppPage, IAppPage } from '../../molecules'
import { Text, Flex, Button } from '../../atoms'

export interface INotificationsTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  onPress: () => void
}

export const NotificationsTemplate: React.FC<INotificationsTemplate> = ({
  testID = 'NotificationsTemplate',
  onPress,
  ...props
}) => {
  return (
    <AppPage {...props} testID={testID}>
      <Flex flex={1} justifyContent='center'>
        <Text>
          Lembretes Padrões
        </Text>
        <Button
          onPress={() => null}
          text='Vacina X'
          mode='outlined'
        />
        <Button
          onPress={() => null}
          text='Vacina Y'
          mode='outlined'
        />
        <Text>
          Lembretes Criados
        </Text>
        <Button
          onPress={() => null}
          text='Nome x'
          mode='outlined'
        />
      </Flex>
      <Flex>
        <Button
          onPress={onPress}
          text='Criar Lembrete'
          mode='contained'
        />
      </Flex>

    </AppPage>
  )
}
