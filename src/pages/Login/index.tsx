import React, { useMemo } from 'react'
import auth from '@react-native-firebase/auth'
import { ReactNativeFirebase } from '@react-native-firebase/app'

import { LoginTemplate } from '../../atomic/templates'
import { ILoginFormInputs } from '../../atomic/organisms'

export const Login: React.FC = () => {
  const authentication = useMemo(auth, [])

  const handleSubmitLoginEmail = async (form: ILoginFormInputs) => {
    try {
      await authentication.signInWithEmailAndPassword(form.email, form.password)
    } catch (_error) {
      const error = _error as ReactNativeFirebase.NativeFirebaseError
      console.log('error', error.code)
    }
  }

  const handleSubmitLoginSocial = (social: string) => {
    //
  }

  return (
    <LoginTemplate
      form={{
        onSubmit: handleSubmitLoginEmail
      }}
      onPressSocial={handleSubmitLoginSocial}
      onPressRegister={() => console.log('foo')}
    />
  )
}
