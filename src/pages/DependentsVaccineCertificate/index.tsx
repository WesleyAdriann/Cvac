import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { DependentsVaccineCertificateTemplate } from '~/atomic'
import { useAppSelector, useAppDispatch, vaccineCertificatesActions } from '~/store'
import { logger } from '~/utils'

export const DependentsVaccineCertificate: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const TAG = 'DependentsVaccineCertificate'
  const dispatch = useAppDispatch()
  const dependents = useAppSelector((state) => state.userProfile.depentents)

  const onPressDependent = (dependentId: string) => {
    logger(TAG, 'dependent id', dependentId)
    dispatch(vaccineCertificatesActions.setDependentId(dependentId))
    navigation.push('vaccineCertificateCalendars')
  }

  const onPressRegister = () => navigation.push('registerDependents')

  return (
    <DependentsVaccineCertificateTemplate
      onPressDependent={onPressDependent}
      onPressRegister={onPressRegister}
      dependents={dependents ?? {}}
    />
  )
}
