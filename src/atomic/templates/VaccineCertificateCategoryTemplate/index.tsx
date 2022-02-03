import { parseWithOptions } from 'date-fns/fp'
import React from 'react'

import { List } from 'react-native-paper'

import {Text} from '../../atoms'
import {AppPage, ListItem} from '../../molecules'

export interface IVaccineCertificateCategoryTemplate {
  testID?: string
}

export const VaccineCertificateCategoryTemplate: React.FC<IVaccineCertificateCategoryTemplate> = ({
  testID = 'VaccineCertificateCategoryTemplate',

  ...props
}) => {
  return(
    <AppPage testID={testID} {...props} scroll padding={0}>
      <Text align='center' size={30}>
         Pessoa X
      </Text>

      <List.Item
        onPress={() => null}
        title='Criança'
        right={props => <List.Icon {...props} icon="chevron-right"/>}
      />
      <List.Item
        onPress={() => null}
        title='Adolescente'
        right={props => <List.Icon {...props} icon="chevron-right"/>}
      />
      <List.Item
        onPress={() => null}
        title='Adulto'
        right={props => <List.Icon {...props} icon="chevron-right"/>}
      />
      <List.Item
        onPress={() => null}
        title='Idoso'
        right={props => <List.Icon {...props} icon="chevron-right"/>}
      />
    </AppPage>

  )

}
