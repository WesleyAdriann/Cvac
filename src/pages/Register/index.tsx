import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'

import { RegisterTemplate } from '../../atomic/templates'
import { IRegisterFormInputs } from '../../atomic/organisms'

interface IRegister extends NativeStackHeaderProps {
  route: RouteProp<{
    paramns: {
      isSocialRegister: boolean
    }
  }>
}

export const Register: React.FC<IRegister> = ({ route }) => {
  const handleSubmit = async (form: IRegisterFormInputs) => {
    //
  }

  return (
    <RegisterTemplate
      form={{
        onSubmit: handleSubmit,
        isSocialRegister: route.params?.isSocialRegister
      }}
    />
  )
}
