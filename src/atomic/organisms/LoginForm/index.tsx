import React from 'react'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Flex, Button } from '../../atoms'
import { TextInput } from '../../molecules'

import { validation } from './LoginForm.valid'

export interface ILoginFormInputs {
  email: string
  password: string
}

export interface ILoginForm {
  testID?: string,
  onSubmit: (data: ILoginFormInputs) => void
}

export const LoginForm : React.FC<ILoginForm> = ({ testID = 'LoginForm', onSubmit }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<ILoginFormInputs>({
    resolver: yupResolver(validation),
    defaultValues: {
      email: '',
      password: ''
    }
  })

  const onSubmitPress = handleSubmit(onSubmit)

  return (
    <Flex testID={testID}>
      <Controller
        name='email'
        control={control}
        render={({ field }) => (
          <TextInput
            label='Email'
            onChangeText={field.onChange}
            withError={!!errors.email?.message}
            description={errors.email?.message}
          />
        )}
      />
      <Controller
        name='password'
        control={control}
        render={({ field }) => (
          <TextInput
            label='Senha'
            type='password'
            onChangeText={field.onChange}
            withError={!!errors.password?.message}
            description={errors.password?.message}
          />
        )}
      />
      <Flex marginStyle='4px 0 0'>
        <Button text='entrar' onPress={onSubmitPress}/>

      </Flex>
    </Flex>
  )
}
