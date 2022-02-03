import React from 'react'

import { Text, Flex } from '../../atoms'
import { AppPage, ListItem } from '../../molecules'

export interface IVaccineCertificateCategoryTemplate {
  testID?: string
  onPress: () => void
}

export const VaccineCertificateCategoryTemplate: React.FC<IVaccineCertificateCategoryTemplate> = ({
  testID = 'VaccineCertificateCategoryTemplate',
  onPress,
  ...props
}) => {
  return (
    <AppPage testID={testID} {...props} padding={0}>
      <Flex flex={0.5} justifyContent='center'>
        <Text align='center' size={30}>
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
