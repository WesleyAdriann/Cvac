import React from 'react'

import { Text, Flex, Button } from '../../atoms'
import { AppPage, IAppPage, VaccineDose } from '../../molecules'

export interface IVaccineCertificatesTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  onPressSave: () => void
  onPressVaccine: (vaccineId: string, selected: boolean) => void
}

export const VaccineCertificatesTemplate: React.FC<IVaccineCertificatesTemplate> = ({
  testID = 'VaccineCertificatesTemplate',
  onPressSave,
  onPressVaccine,
  ...props
}) => {
  return (
    <AppPage {...props} testID={testID}>
      <Flex flex={1} justifyContent='center'>
        <Flex marginStyle='0 0 16px'>
          <Text marginBottom={8}>Vacina X</Text>
          <Flex flexDirection='row' >
            <VaccineDose onPress={() => onPressVaccine('x', true)} text='1 dose' selected/>
            <VaccineDose onPress={() => onPressVaccine('x', false)} text='2 dose'/>
          </Flex>
        </Flex>
        <Flex marginStyle='0 0 16px'>
          <Text marginBottom={8}>Vacina Y</Text>
          <Flex flexDirection='row' >
            <VaccineDose onPress={() => onPressVaccine('x', false)} text='dose unica'/>
          </Flex>
        </Flex>
        <Flex marginStyle='0 0 16px'>
          <Text marginBottom={8}>Vacina Y</Text>
          <Flex flexDirection='row' >
            <VaccineDose onPress={() => onPressVaccine('x', true)} text='dose unica' selected/>
          </Flex>
        </Flex>
        <Flex marginStyle='0 0 16px'>
          <Text marginBottom={8}>Vacina Y</Text>
          <Flex flexDirection='row' >
            <VaccineDose onPress={() => onPressVaccine('x', false)} text='1 dose'/>
            <VaccineDose onPress={() => onPressVaccine('x', false)} text='2 dose'/>
          </Flex>
        </Flex>
      </Flex>
      <Flex>
        <Button
          onPress={onPressSave}
          text='Salvar'
          mode='contained'
        />
      </Flex>

    </AppPage>
  )
}
