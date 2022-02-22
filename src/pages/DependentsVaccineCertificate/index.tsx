import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { DependentsVaccineCertificateTemplate } from '~/atomic'
import { useAppSelector } from '~/store'
import { logger } from '~/utils'

export const DependentsVaccineCertificate: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const TAG = 'DependentsVaccineCertificate'
  const dependents = useAppSelector((state) => state.userProfileReducer.depentents)

  logger(TAG, 'dependents', dependents)

  const onPressDependent = () => navigation.push('vaccineCertificateCategory')
  const onPressRegister = () => navigation.push('registerDependents')

  return (
    <DependentsVaccineCertificateTemplate
      onPressDependent={onPressDependent}
      onPressRegister={onPressRegister}
      dependents={dependents ?? {}}
    />
  )
}
