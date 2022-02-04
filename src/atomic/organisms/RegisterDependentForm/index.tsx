import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Button, Flex } from '../../atoms'
import { TextInput } from '../../molecules'

import { validation } from './RegisterDependentForm.valid'

export interface IRegisterDependentFormInputs {
  name: string
  birthDate: string
}

export interface IRegisterDependentForm {
  testID?: string,
  onSubmit: (data: IRegisterDependentFormInputs) => void
  isLoading?: boolean
}

export const RegisterDependentForm: React.FC<IRegisterDependentForm> = ({ testID = 'RegisterDependentForm', isLoading, onSubmit, ...props }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<IRegisterDependentFormInputs>({
    resolver: yupResolver(validation),
    defaultValues: {
      name: '',
      birthDate: ''
    }
  })

  const onSubmitPress = handleSubmit((form) => {
    onSubmit({
      ...form,
      birthDate: new Date(form.birthDate).toISOString()
    })
  })
  return (
    <Flex {...props} flex={1} testID={testID}>
      <Flex flex={1} justifyContent='center'>
        <Controller
          name='name'
          control={control}
          render={({ field }) => (
            <TextInput
              disabled={isLoading}
              label='Nome'
              onChangeText={field.onChange}
              withError={!!errors.name?.message}
              description={errors.name?.message}
            />
          )}
        />
        <Controller
          name='birthDate'
          control={control}
          render={({ field }) => (
            <TextInput
              disabled={isLoading}
              label='Data de Nascimento'
              type='date'
              onChangeText={field.onChange}
              withError={!!errors.birthDate?.message}
              description={errors.birthDate?.message}
              value={field.value}
            />
          )}
        />
      </Flex>
      <Button
        onPress={onSubmitPress}
        text='Salvar'
        mode='contained'
        isLoading={isLoading}
      />
    </Flex>
  )
}
