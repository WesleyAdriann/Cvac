import React from 'react'
import { Image, KeyboardAvoidingView, Platform } from 'react-native'

import Logotipo from '~/assets/logotipo/logotipo.png'

import { Flex, Text, Pressable } from '../../atoms'
import { AppPage, IAppPage } from '../../molecules'
import { LoginForm, ILoginForm } from '../../organisms'

export interface ILoginTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  form: ILoginForm
  onPressSocial: (social: string) => void
  onPressRegister: () => void
}

export const LoginTemplate: React.FC<ILoginTemplate> = ({ testID = 'LoginTemplate', form, onPressSocial, onPressRegister, ...props }) => {
  return (
    <AppPage {...props} testID={testID} scroll>
      <KeyboardAvoidingView behavior={Platform.OS === 'ios' ? 'padding' : undefined} style={{ flex: 1 }} keyboardVerticalOffset={16}>
        <Flex flex={1} alignItems='center' justifyContent='center' marginStyle={16}>
          <Image source={Logotipo} />
        </Flex>
        <Flex flex={2} justifyContent='center'>
          <LoginForm {...form}/>
          <Flex marginStyle='20px 0'>
            <Text align='center'>ou continue com</Text>
          </Flex>
          {/* <Button text='google' onPress={() => onPressSocial('google')}/>
        <Button text='facebook' onPress={() => onPressSocial('facebook')} marginStyle='20px 0' /> */}
          <Pressable onPress={onPressRegister}>
            <Text align='center'>Não possui conta? <Text underline>Cadastrar</Text></Text>
          </Pressable>
        </Flex>
      </KeyboardAvoidingView>
    </AppPage>
  )
}
