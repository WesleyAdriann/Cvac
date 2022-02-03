import React from 'react'
import { IVaccineCertificateCategoryTemplate } from '..'

import { AppPage,  } from '../../molecules'
import { Text, Flex } from '../../atoms'
import { Button } from '../../atoms'

export interface IVaccineCertificatesTemplate{
  testID?: string
}

export const VaccineCertificatesTemplate: React.FC<IVaccineCertificatesTemplate> = ({
  testID = 'VaccineCertificatesTemplate',

  ...props
}) => {
  return(
    <AppPage>
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
        onPress={() => null}
        text='Salvar'
        mode='contained'
        />
      </Flex>

    </AppPage>
  )

}
