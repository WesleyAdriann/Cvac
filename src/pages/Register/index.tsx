import React, { useState } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'

import { IDialog } from '../../atomic/molecules'
import { IRegisterFormInputs } from '../../atomic/organisms'
import { RegisterTemplate } from '../../atomic/templates'

interface IRegister extends NativeStackHeaderProps {
  route: RouteProp<{
    paramns: {
      isSocialRegister: boolean
    }
  }>
}

export const Register: React.FC<IRegister> = ({ route }) => {
  const [dialog, setDialog] = useState<IDialog>({ visible: false })

  const createInAuth = async (email: string, password: string) => {
    //
  }

  const handleSubmit = async (form: IRegisterFormInputs) => {
    console.log(form)
    setDialog({
      visible: true,
      content: 'Sucesso'
    })
    if (!route.params?.isSocialRegister) createInAuth(form.email, form.password)
  }

  return (
    <RegisterTemplate
      dialog={{
        ...dialog,
        onClose: () => setDialog({ visible: false })
      }}
      form={{
        onSubmit: handleSubmit,
        isSocialRegister: route.params?.isSocialRegister
      }}
    />
  )
}
