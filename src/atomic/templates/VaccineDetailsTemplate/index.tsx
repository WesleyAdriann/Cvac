import React from 'react'

import { AppPage, IAppPage } from '../../molecules'
import { Text, Flex } from '../../atoms'

export interface IVaccineDetailsTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
}

export const VaccineDetailsTemplate: React.FC<IVaccineDetailsTemplate> = ({
  testID = 'VaccineDetailsTemplate',
  ...props
}) => {
  return (
    <AppPage {...props} testID={testID} padding={16}>
      <Flex flex={0.5} justifyContent='center'>
        <Text align='center' size={30}>
          Vacina X
        </Text>
      </Flex>
      <Flex flex={2} scroll>
        <Flex>
          <Text>Idade: ao nascer</Text>
          <Text>Dose:  única</Text>
          <Text>Reações adversas: Y</Text>
          <Text>Contra indicação: X</Text>
          <Text>Prevenção: Z</Text>
        </Flex>
      </Flex>
    </AppPage>
  )
}
