import React from 'react'

import { Text, Flex } from '../../atoms'
import { AppPage, ListItem, IAppPage } from '../../molecules'

export interface IVaccineCertificateCategoryTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  onPress: () => void
}

export const VaccineCertificateCategoryTemplate: React.FC<IVaccineCertificateCategoryTemplate> = ({
  testID = 'VaccineCertificateCategoryTemplate',
  onPress,
  ...props
}) => {
  return (
    <AppPage {...props} testID={testID} padding={0}>
      <Flex flex={0.5} justifyContent='center'>
        <Text align='center' size={34}>
          Pessoa X
        </Text>
      </Flex>

      <Flex flex={2} scroll>
        <ListItem
          onPress={onPress}
          text='Criança'
          icon='chevron-right'
        />
        <ListItem
          onPress={onPress}
          text='Adolescente'
          icon='chevron-right'
        />
        <ListItem
          onPress={onPress}
          text='Adulto'
          icon='chevron-right'
        />
        <ListItem
          onPress={onPress}
          text='Idoso'
          icon='chevron-right'
        />
      </Flex>
    </AppPage>
  )
}
