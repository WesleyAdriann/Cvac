import React, { useState } from 'react'
import firestore from '@react-native-firebase/firestore'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { RegisterDependentsTemplate } from '~/atomic'
import { IRegisterDependentFormInputs } from '~/atomic/organisms'
import { logger } from '~/utils'
import { collectionDependents, collectionUsers } from '~/services/firebase/firestore'
import { useAppSelector, useAppDispatch, userProfileActions } from '~/store'
import { useCreateDefaultNotifications } from '~/hooks'

export const RegisterDependents: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const TAG = 'RegisterDependents'
  const dispatch = useAppDispatch()
  const userUid = useAppSelector((state) => state.userProfile.uid!)
  const createNotifications = useCreateDefaultNotifications()

  const [isLoading, setIsLoading] = useState(false)

  const onRegister = async (form: IRegisterDependentFormInputs) => {
    logger(TAG, 'onRegister', form)
    try {
      setIsLoading(true)
      const birthDate = firestore.Timestamp.fromDate(new Date(form.birthDate))
      const userRef = collectionUsers.doc(userUid)
      const dependentRef = await collectionDependents.add({
        name: form.name,
        birthDate,
        userUid: userRef
      })
      dispatch(userProfileActions.setDepentent({ name: form.name, birthDate, id: dependentRef.id }))
      await createNotifications(new Date(form.birthDate), dependentRef.id, form.name)
      navigation.pop()
    } catch (_error) {
      //
    } finally {
      setIsLoading(false)
    }
  }

  return (
    <RegisterDependentsTemplate
      form={{
        onSubmit: onRegister,
        isLoading
      }}
    />
  )
}
