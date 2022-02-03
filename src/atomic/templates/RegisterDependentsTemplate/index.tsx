import React from 'react'

import { AppPage, TextInput } from '../../molecules'

import { Button, Flex } from '../../atoms'

import { IRegisterForm, RegisterForm } from '../../organisms'

export interface IRegisterDependentsTemplate {
  testID?: string
}

export const RegisterDependentsTemplate: React.FC<IRegisterDependentsTemplate> = ({
  testID = 'RegisterDependentsTemplate',
  ...props
}) => {
  return (
    <AppPage>
      <Flex flex={1} justifyContent='center'>
        <TextInput
          onChangeText={() => null}
          label='Nome'
          type='text'
        />
        <TextInput
          onChangeText={() => null}
          label='Data de nascimento'
          type='date'
        />
      </Flex>

      <Button
        onPress={() => null}
        text='Salvar'
        mode='contained'
        marginStyle='0 0 16px'
      />
    </AppPage>

  )
}
