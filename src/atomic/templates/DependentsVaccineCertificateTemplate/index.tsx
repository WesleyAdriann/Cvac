import React from 'react'

import { IDependent } from '~/store'

import { AppPage, IAppPage } from '../../molecules'
import { Button, Flex } from '../../atoms'

export interface IDependentsVaccineCertificateTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  onPressDependent: (dependentId: string) => void
  onPressRegister: () => void
  dependents: { [key: string]: IDependent }
}

export const DependentsVaccineCertificateTemplate: React.FC<IDependentsVaccineCertificateTemplate> = ({
  testID = 'DependentsVaccineCertificateTemplate',
  onPressDependent,
  onPressRegister,
  dependents,
  ...props
}) => {
  return (
    <AppPage {...props} testID={testID} padding={0}>
      <Flex scroll paddingStyle={16} contentContainerStyle={{ justifyContent: 'center' }}>
        {
          Object.entries(dependents ?? {}).map(([key, value]) => (
            <Button
              key={key}
              onPress={() => onPressDependent(key)}
              text={value.name}
              mode='outlined'
              marginStyle='0 0 16px'
            />
          ))
        }
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
