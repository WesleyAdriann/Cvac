import React from 'react'

import { DependentsVaccineCertificateTemplate } from '../../atomic'

import { NativeStackHeaderProps } from '@react-navigation/native-stack'

export const DependentsVaccineCertificate: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const onPressDependent = () => navigation.push('vaccineCertificateCategory')
  const onPressRegister = () => navigation.push('registerDependents')

  return (
    <DependentsVaccineCertificateTemplate
      onPressDependent={onPressDependent}
      onPressRegister={onPressRegister}
    />
  )
}
