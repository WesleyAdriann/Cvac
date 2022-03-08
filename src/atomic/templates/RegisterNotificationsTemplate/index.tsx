import React from 'react'

import { Flex, Text } from '../../atoms'
import { AppPage, IAppPage } from '../../molecules'
import { RegisterNotificationsForm, IRegisterNotificationsForm } from '../../organisms'

export interface IRegisterNotificationsTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  form: IRegisterNotificationsForm
}

export const RegisterNotificationsTemplate: React.FC<IRegisterNotificationsTemplate> = ({
  testID = 'RegisterNotificationsTemplate',
  form,
  ...props
}) => {
  return (
    <AppPage {...props} testID={testID} scroll>
    <Flex flex={1}>
      <Flex flex={0.5} marginStyle='16px 0 0'>
        <Text size={34}>Criar Lembrete</Text>
      </Flex>
      <Flex flex={2}>
        <RegisterNotificationsForm {...form} />
      </Flex>
    </Flex>
  </AppPage>
  )
}
