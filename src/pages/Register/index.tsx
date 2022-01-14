import React, { useState } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { RouteProp } from '@react-navigation/native'
import auth from '@react-native-firebase/auth'
import firestore from '@react-native-firebase/firestore'
import { ReactNativeFirebase } from '@react-native-firebase/app'

import { IDialog } from '../../atomic/molecules'
import { IRegisterFormInputs } from '../../atomic/organisms'
import { RegisterTemplate } from '../../atomic/templates'

import { useAppDispatch } from '../../store'
import { userProfileActions } from '../../store/slices/UserProfile'

interface IRegister extends NativeStackHeaderProps {
  route: RouteProp<{
    paramns: {
      isSocialRegister: boolean
    }
  }>
}

export const Register: React.FC<IRegister> = ({ route, navigation }) => {
  const dispatch = useAppDispatch()

  const [dialog, setDialog] = useState<IDialog>({ visible: false })
  const [isLoading, setIsLoading] = useState<boolean>(false)

  const createInAuth = async (email: string, password: string) => {
    try {
      const credentails = await auth().createUserWithEmailAndPassword(email, password)
      Promise.resolve(credentails)
    } catch (_error) {
      const error = _error as ReactNativeFirebase.NativeFirebaseError
      const errors: {[key: string]: string} = {
        'auth/weak-password': 'Sua senha é não atende aos criterios de segurançaa, ela deve possuir no minimo 6 caracteres',
        'auth/email-already-in-use': 'O email ja esta em uso',
        'auth/invalid-email': 'O email informado não é valido',
        default: 'Houve um erro para finalizar seu cadastro'
      }
      const errorContent = errors?.[error.code] ?? errors.default
      console.log(error.code)
      setDialog({
        visible: true,
        title: 'Erro para o cadastro',
        content: errorContent
      })

      Promise.reject(error)
    }
  }

  const updateDisplayName = async (displayName: string) => {
    await auth().currentUser?.updateProfile({ displayName })
    dispatch(userProfileActions.setName(displayName))
  }

  const handleSubmit = async (form: IRegisterFormInputs) => {
    try {
      if (isLoading) return
      setIsLoading(true)
      await createInAuth(form.email, form.password)
      await updateDisplayName(form.name)

      setDialog({
        visible: true,
        title: 'Sucesso',
        content: 'Cadastro finalizado com sucesso',
        onPressOk: navigation.popToTop
      })
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <RegisterTemplate
      dialog={{
        ...dialog,
        onClose: () => setDialog({ visible: false })
      }}
      form={{
        onSubmit: handleSubmit,
        isSocialRegister: route.params?.isSocialRegister,
        isLoading
      }}
    />
  )
}
