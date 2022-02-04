import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import React from 'react'

import { VaccineCertificateCategoryTemplate } from '../../atomic'

export const VaccineCertificateCategory: React.FC<NativeStackHeaderProps> = ({navigation}) => {
  const onPress = () => navigation.push('vaccineCertificate')
  return <VaccineCertificateCategoryTemplate onPress={onPress}/>
}
