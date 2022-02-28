import React from 'react'
import { useForm, Controller } from 'react-hook-form'
import { yupResolver } from '@hookform/resolvers/yup'

import { Flex, Button } from '../../atoms'
import { TextInput } from '../../molecules'

import { validation } from './RegisterNotificationsForm.valid'

export interface IRegisterNotificationsFormInputs {
  description: string
  date: string
  hour: string
}

export interface IRegisterNotificationsForm {
  testID?: string,
  onSubmit: (data: IRegisterNotificationsFormInputs) => void
}

export const RegisterNotificationsForm : React.FC<IRegisterNotificationsForm> = ({ testID = 'RegisterNotificationsForm', onSubmit, ...props }) => {
  const { control, handleSubmit, formState: { errors } } = useForm<IRegisterNotificationsFormInputs>({
    resolver: yupResolver(validation),
    defaultValues: {
      description: '',
      date: '',
      hour: ''
    }
  })

  const onSubmitPress = handleSubmit(onSubmit)

  return (
    <Flex {...props} testID={testID} flex={1}>
      <Flex flex={1}>
        <Controller
          name='description'
          control={control}
          render={({ field }) => (
            <TextInput
              label='Descrição'
              onChangeText={field.onChange}
              withError={!!errors.description?.message}
              description={errors.description?.message}
            />
          )}
        />
        <Controller
          name='date'
          control={control}
          render={({ field }) => (
            <TextInput
              label='Data'
              type='date'
              onChangeText={field.onChange}
              withError={!!errors.date?.message}
              description={errors.date?.message}
              value={field.value}
            />
          )}
        />
        <Controller
          name='hour'
          control={control}
          render={({ field }) => (
            <TextInput
              label='Hora'
              type='hour'
              onChangeText={field.onChange}
              withError={!!errors.hour?.message}
              description={errors.hour?.message}
              value={field.value}
            />
          )}
        />
      </Flex>
      <Button text='Salvar' onPress={onSubmitPress}/>
    </Flex>
  )
}
