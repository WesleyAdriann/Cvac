import React from 'react'
import { Image } from 'react-native'

import Logotipo from '~/assets/logotipo/logotipo.png'

import { Flex } from '../../atoms'
import { AppPage, IAppPage } from '../../molecules'
import { RegisterForm, IRegisterForm } from '../../organisms'

export interface IRegisterTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  form: IRegisterForm
}

export const RegisterTemplate: React.FC<IRegisterTemplate> = ({ testID = 'RegisterTemplate', form, ...props }) => {
  return (
    <AppPage {...props} testID={testID} scroll>
      <Flex flex={0.6} alignItems='center' justifyContent='center'>
        <Image source={Logotipo} />
      </Flex>
      <Flex flex={1} >
        <RegisterForm {...form}/>
      </Flex>
    </AppPage>
  )
}
