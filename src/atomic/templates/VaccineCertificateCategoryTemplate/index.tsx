import React from 'react'
import { List } from 'react-native-paper'
import { Icon } from 'react-native-paper/lib/typescript/components/Avatar/Avatar'

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
      <List.Item
      onPress={()=> null}
      title='Criança'
      right={props => <List.Icon {...props} icon="chevron-right"/>}
      />
    </AppPage>

  )

}
