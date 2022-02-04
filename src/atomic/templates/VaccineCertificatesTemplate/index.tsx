import React from 'react'

import { AppPage, IAppPage } from '../../molecules'
import { Text, Flex, Button } from '../../atoms'

export interface IVaccineCertificatesTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  onPress: () => void
}

export const VaccineCertificatesTemplate: React.FC<IVaccineCertificatesTemplate> = ({
  testID = 'VaccineCertificatesTemplate',
  onPress,
  ...props
}) => {
  return (
    <AppPage {...props} testID={testID}>
      <Flex flex={1} justifyContent='center'>
        <Text>
          Vacina X
        </Text>
        <Text>
          Vacina Y
        </Text>
        <Text>
          Vacina Z
        </Text>
      </Flex>
      <Flex>
        <Button
          onPress={onPress}
          text='Salvar'
          mode='contained'
        />
      </Flex>

    </AppPage>
  )
}
