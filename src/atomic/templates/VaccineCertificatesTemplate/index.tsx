import React from 'react'

import { Text, Flex, Button } from '../../atoms'
import { AppPage, IAppPage, VaccineDose } from '../../molecules'

export interface IVaccineCertificatesTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  onPressSave: () => void
  onPressVaccine: (vaccineId: string, doses: number) => void
  vaccineCertificates: any[]
}

export const VaccineCertificatesTemplate: React.FC<IVaccineCertificatesTemplate> = ({
  testID = 'VaccineCertificatesTemplate',
  onPressSave,
  onPressVaccine,
  vaccineCertificates,
  ...props
}) => {
  return (
    <AppPage {...props} testID={testID} padding={0}>
      <Flex flex={1} contentContainerStyle={{ justifyContent: 'center' }} scroll paddingStyle={16}>
        {
          vaccineCertificates.map((vaccine) => (
            <Flex marginStyle='0 0 16px' key={vaccine.id}>
              <Text marginBottom={8}>{vaccine.name}</Text>
              <Flex flexDirection='row' style={{ flexWrap: 'wrap' }}>
                {
                  new Array(vaccine.doses).fill('').map((dose, index) => (
                    <VaccineDose
                      flexBasis={vaccine.doses % 4 === 0 ? 50 : 33}
                      key={index}
                      onPress={() => onPressVaccine(vaccine.id, vaccine.appliedDoses === index + 1 ? 0 : index + 1)}
                      text={vaccine.doses === 1 ? 'dose única' : `${index + 1}ª dose`}
                      selected={vaccine.appliedDoses >= index + 1}
                    />
                  ))
                }
              </Flex>
            </Flex>
          ))
        }
      </Flex>
      <Flex paddingStyle={16}>
        <Button
          onPress={onPressSave}
          text='Salvar'
          mode='contained'
        />
      </Flex>
    </AppPage>
  )
}
