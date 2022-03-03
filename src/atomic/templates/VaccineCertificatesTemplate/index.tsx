import React from 'react'

import { IVaccinesWithCertificate } from '~/store'

import { Text, Flex, Button } from '../../atoms'
import { AppPage, IAppPage, VaccineDose } from '../../molecules'

export interface IVaccineCertificatesTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  onPressSave: () => void
  onPressCertificate: (vaccineId: string, doses: number) => void
  vaccineCertificates: IVaccinesWithCertificate[]
  calendarName: string
}

export const VaccineCertificatesTemplate: React.FC<IVaccineCertificatesTemplate> = ({
  testID = 'VaccineCertificatesTemplate',
  onPressSave,
  onPressCertificate,
  vaccineCertificates,
  calendarName,
  isLoading,
  ...props
}) => {
  const onPressItem = (vaccineId: string, appliedDoses: number, doseIndex: number) => {
    onPressCertificate(vaccineId, appliedDoses === doseIndex + 1 ? 0 : doseIndex + 1)
  }

  return (
    <AppPage {...props} testID={testID} padding={0} isLoading={isLoading} >
      <Flex flex={0.5} justifyContent='center'>
        <Text align='center' size={30}>
          { calendarName }
        </Text>
      </Flex>
      <Flex flex={2} scroll paddingStyle={16}>
        {
          !isLoading && vaccineCertificates.map((vaccine) => (
            <Flex marginStyle='0 0 16px' key={vaccine.id}>
              <Text marginBottom={8}>{vaccine.name}</Text>
              <Flex flexDirection='row' style={{ flexWrap: 'wrap' }}>
                {
                  new Array(vaccine.doses).fill('').map((_dose, doseIndex) => (
                    <VaccineDose
                      flexBasis={vaccine.doses % 4 === 0 ? 50 : 33}
                      key={`${vaccine.id}-${doseIndex}`}
                      onPress={() => onPressItem(vaccine.id, vaccine.appliedDoses, doseIndex)}
                      text={vaccine.doses === 1 ? 'dose única' : `${doseIndex + 1}ª dose`}
                      selected={vaccine.appliedDoses >= doseIndex + 1}
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
