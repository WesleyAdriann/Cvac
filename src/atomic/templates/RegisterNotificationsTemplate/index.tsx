import React from 'react'

import { AppPage, IAppPage, TextInput } from '../../molecules'
import { Text, Flex, Button } from '../../atoms'

export interface IRegisterNotificationsTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
}

export const RegisterNotificationsTemplate: React.FC<IRegisterNotificationsTemplate> = ({
  testID = 'RegisterNotificationsTemplate',
  ...props
}) => {
  return (
    <AppPage {...props} testID={testID}>
      <Text size={30}>
          Criar Lembrete
      </Text>
      <Flex flex={1} justifyContent='center'>
        <TextInput
          description='Descrição'
          type='text'
        />

        <TextInput
          description='Data'
          type='date'

        />
        <TextInput
          description='hora'
          type='number'

        />
      </Flex>
      <Flex>
        <Button
          onPress={() => null}
          text='Salvar'
          mode='contained'
        />
      </Flex>
    </AppPage>
  )
}
