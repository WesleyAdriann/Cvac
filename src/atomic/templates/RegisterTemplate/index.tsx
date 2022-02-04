import React from 'react'
import { Image } from 'react-native'

import { Flex } from '../../atoms'
import { AppPage, IAppPage } from '../../molecules'
import { RegisterForm, IRegisterForm } from '../../organisms'

import Logotipo from '../../../assets/logotipo/logotipo.png'

export interface IRegisterTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  form: IRegisterForm
}

export const RegisterTemplate: React.FC<IRegisterTemplate> = ({ testID = 'RegisterTemplate', form, ...props }) => {
  return (
    <AppPage {...props} testID={testID} scroll>
      <Flex flex={1} alignItems='center' justifyContent='center'>
        <Image source={Logotipo} />
      </Flex>
      <Flex flex={2} >
        <RegisterForm {...form}/>
      </Flex>
    </AppPage>
  )
}
