import React from 'react'

import { Flex, Text, Button } from '../../atoms'
import { AppPage } from '../../molecules'
import { LoginForm, ILoginForm } from '../../organisms'

interface ILoginTemplate {
  testID?: string
  form: ILoginForm
  onPressSocial: (social: string) => void
  onPressRegister: () => void
}

export const LoginTemplate: React.FC<ILoginTemplate> = ({ testID = 'LoginTemplate', form, onPressSocial, onPressRegister, ...props }) => {
  return (
    <AppPage {...props} testID={testID}>
      <Flex flexGrow={2}>
        <Text>logo</Text>
      </Flex>
      <Flex flexGrow={4} justifyContent='center'>
        <LoginForm {...form}/>
        <Text align='center'>ou continue com</Text>
        <Button text='google' onPress={() => onPressSocial('google')} marginStyle='16px 0 0' />
        <Button text='facebook' onPress={() => onPressSocial('facebook')} marginStyle='16px 0' />
      </Flex>
      <Flex flexGrow={0.5} justifyContent='flex-end'>
        <Text align='center'>Não possui conta?</Text>
        <Button text='cadastrar' mode='outlined' onPress={onPressRegister} marginStyle='16px 0 0' />

      </Flex>
    </AppPage>
  )
}
