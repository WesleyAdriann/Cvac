import React from 'react'

import { AppPage, IAppPage } from '../../molecules'

import { Button, Flex } from '../../atoms'

export interface IDependentsVaccineCertificateTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  onPressDependent: () => void
  onPressRegister: () => void
}

export const DependentsVaccineCertificateTemplate: React.FC<IDependentsVaccineCertificateTemplate> = ({
  testID = 'DependentsVaccineCertificateTemplate',
  onPressDependent,
  onPressRegister,
  ...props
}) => {
  return (
    <AppPage {...props} testID={testID} padding={0}>
      <Flex scroll paddingStyle={16} contentContainerStyle={{ justifyContent: 'center' }}>
        <Button
          onPress={onPressDependent}
          text='Pessoa X'
          mode='outlined'
          marginStyle='0 0 16px'
        />
        <Button
          onPress={onPressDependent}
          text='Pessoa Y'
          mode='outlined'
          marginStyle='0 0 16px'
        />
      </Flex>
      <Flex paddingStyle={16}>
        <Button
          onPress={onPressRegister}
          text='Cadastrar Dependente'
          mode='contained'
        />
      </Flex>
    </AppPage>
  )
}
