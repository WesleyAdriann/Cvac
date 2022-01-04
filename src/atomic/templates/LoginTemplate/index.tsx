import React from 'react'
import { Image } from 'react-native'

import { Flex, Text, Button, Pressable } from '../../atoms'
import { AppPage } from '../../molecules'
import { LoginForm, ILoginForm } from '../../organisms'

import Logotipo from '../../../assets/logotipo/logotipo.png'

export interface ILoginTemplate {
  testID?: string
  form: ILoginForm
  onPressSocial: (social: string) => void
  onPressRegister: () => void
}

export const LoginTemplate: React.FC<ILoginTemplate> = ({ testID = 'LoginTemplate', form, onPressSocial, onPressRegister, ...props }) => {
  return (
    <AppPage {...props} testID={testID} scroll>
        <Flex flex={1} alignItems='center' justifyContent='center' marginStyle={16}>
          <Image source={Logotipo} />
        </Flex>
        <Flex flex={2} justifyContent='center'>
          <LoginForm {...form}/>
          <Flex marginStyle='20px 0'>
            <Text align='center'>ou continue com</Text>
          </Flex>
          <Button text='google' onPress={() => onPressSocial('google')}/>
          <Button text='facebook' onPress={() => onPressSocial('facebook')} marginStyle='20px 0' />
          <Pressable onPress={onPressRegister}>
            <Text align='center'>Não possui conta? <Text underline>Cadastrar</Text></Text>
          </Pressable>
        </Flex>

    </AppPage>
  )
}
