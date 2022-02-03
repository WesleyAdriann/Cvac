import React from 'react'

import { DependentsVaccineCertificateTemplate } from '../../atomic'

import { NativeStackHeaderProps } from '@react-navigation/native-stack'

export const DependentsVaccineCertificate: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const isTouch = (item: number) => {
    if (item === 1) {
      return navigation.push('vaccineCertificateCategory')
    } else {
      return navigation.push('registerDependents')
    }
  }

  return (
    <DependentsVaccineCertificateTemplate
      checkIsTouch={isTouch}
    />
  )
}
