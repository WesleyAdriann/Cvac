import React from 'react'
import { Image } from 'react-native'

import { Flex } from '../../atoms'
import { AppPage } from '../../molecules'
import { RegisterForm, IRegisterForm } from '../../organisms'

import Logotipo from '../../../assets/logotipo/logotipo.png'

export interface IRegisterTemplate {
  testID?: string
  form: IRegisterForm
}

export const RegisterTemplate: React.FC<IRegisterTemplate> = ({ testID = 'LoginTemplate', form, ...props }) => {
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
