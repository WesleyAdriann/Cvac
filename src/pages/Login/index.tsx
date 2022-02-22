import React, { useMemo } from 'react'
import auth from '@react-native-firebase/auth'
import { ReactNativeFirebase } from '@react-native-firebase/app'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { sessionActions, useAppDispatch, useAppSelector } from '~/store'
import { LoginTemplate } from '~/atomic/templates'
import { ILoginFormInputs } from '~/atomic/organisms'
import { logger } from '~/utils'

export const Login: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const TAG = 'Login'
  const authentication = useMemo(auth, [])
  const dispatch = useAppDispatch()
  const isLoading = useAppSelector((state) => state.sessionReducer.isLoading)

  const handleSubmitLoginEmail = async (form: ILoginFormInputs) => {
    try {
      dispatch(sessionActions.setIsLoading(true))
      const userCredential = await authentication.signInWithEmailAndPassword(form.email, form.password)
      logger(TAG, 'login success', userCredential)
      navigation.pop()
    } catch (_error) {
      const error = _error as ReactNativeFirebase.NativeFirebaseError
      logger(TAG, 'error in handleSubmitLoginEmail', error.message)
      dispatch(sessionActions.setIsLoading(false))
    }
  }

  const handleSubmitLoginSocial = (social: string) => {
    //
  }

  const handleRegister = () => navigation.push('register')

  return (
    <LoginTemplate
      form={{
        onSubmit: handleSubmitLoginEmail,
        isLoading
      }}
      onPressSocial={handleSubmitLoginSocial}
      onPressRegister={handleRegister}
    />
  )
}
