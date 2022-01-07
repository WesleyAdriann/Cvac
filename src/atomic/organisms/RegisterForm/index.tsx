import React from 'react'

import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Flex, Button, Text } from '../../atoms'
import { TextInput } from '../../molecules'

import { validation } from './RegisterForm.valid'

export interface IRegisterFormInputs {
  name: string
  birthDate: string
  email: string
  password: string
}

export interface IRegisterForm {
  testID?: string,
  isSocialRegister: boolean
  onSubmit: (data: IRegisterFormInputs) => void
}

export const RegisterForm : React.FC<IRegisterForm> = ({ testID = 'RegisterForm', isSocialRegister, onSubmit }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<IRegisterFormInputs>({
    resolver: yupResolver(validation(isSocialRegister)),
    defaultValues: {
      name: '',
      birthDate: '',
      email: '',
      password: ''
    }
  })

  const onSubmitPress = handleSubmit(onSubmit)

  return (
    <Flex flex={1} testID={testID}>
      {
        isSocialRegister &&
          <Flex marginStyle='32px 0'>
            <Text>Para finalizar, precisamos da sua data de nascimento.</Text>
          </Flex>
      }
      {
        !isSocialRegister && (
          <Controller
            name='name'
            control={control}
            render={({ field }) => (
              <TextInput
                label='Nome'
                onChangeText={field.onChange}
                withError={!!errors.name?.message}
                description={errors.name?.message}
              />
            )}
          />
        )
      }

      <Controller
        name='birthDate'
        control={control}
        render={({ field }) => (
          <TextInput
            label='Data de Nascimento'
            type='date'
            onChangeText={field.onChange}
            withError={!!errors.birthDate?.message}
            description={errors.birthDate?.message}
            value={field.value}
          />
        )}
      />

      {
        !isSocialRegister && (
          <>
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
          </>
        )
      }

      <Flex flex={1} justifyContent='flex-end'>
        <Button text='finalizar cadastro' onPress={onSubmitPress}/>
      </Flex>
    </Flex>
  )
}
