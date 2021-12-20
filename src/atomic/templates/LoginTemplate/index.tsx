import React from 'react'
import { Image } from 'react-native'

import { Flex, Text, Button } from '../../atoms'
import { AppPage } from '../../molecules'
import { LoginForm, ILoginForm } from '../../organisms'

import Logotipo from '../../../assets/logotipo/logotipo.png'

interface ILoginTemplate {
  testID?: string
  form: ILoginForm
  onPressSocial: (social: string) => void
  onPressRegister: () => void
}

export const LoginTemplate: React.FC<ILoginTemplate> = ({ testID = 'LoginTemplate', form, onPressSocial, onPressRegister, ...props }) => {
  return (
    <AppPage {...props} testID={testID}>
      <Flex flexGrow={1} alignItems='center' justifyContent='center' >
        <Image source={Logotipo} />
      </Flex>
      <Flex flexGrow={1} justifyContent='center'>
        <LoginForm {...form}/>
        <Flex marginStyle='32px 0 0'>
          <Text align='center'>ou continue com</Text>

        </Flex>
        <Button text='google' onPress={() => onPressSocial('google')} marginStyle='16px 0 0'/>
        <Button text='facebook' onPress={() => onPressSocial('facebook')} marginStyle='16px 0' />
      </Flex>
      <Flex justifyContent='flex-end'>
        <Text align='center'>Não possui conta?</Text>
        <Button text='cadastrar' mode='outlined' onPress={onPressRegister} marginStyle='16px 0 0' />

      </Flex>
    </AppPage>
  )
}
