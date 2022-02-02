import React from 'react'

import { AppPage } from '../../molecules'

import { Text } from '../../atoms'


export interface IVaccineDetailsTemplate {
  testID?: string
}

export const VaccineDetailsTemplate: React.FC<IVaccineDetailsTemplate> = ({
  testID = 'VaccineDetails',

  ...props
}) => {
    return(
      <AppPage testID={testID} {...props} scroll padding={16}>
        <Text>
          idade: 
        </Text>
        <Text>
          ao nascer 
        </Text>
      </AppPage>
    )
}
