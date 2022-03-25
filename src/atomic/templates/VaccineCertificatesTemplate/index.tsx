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
          !isLoading && vaccineCertificates.map((certificate) => (
            <Flex marginStyle='0 0 16px' key={certificate.vaccineId}>
              <Text marginBottom={8}>{certificate.name}</Text>
              <Flex flexDirection='row' style={{ flexWrap: 'wrap' }}>
                {
                  new Array(certificate.doses).fill('').map((_dose, doseIndex) => (
                    <VaccineDose
                      flexBasis={certificate.doses % 4 === 0 ? 50 : 33}
                      key={`${certificate.vaccineId}-${doseIndex}`}
                      onPress={() => onPressItem(certificate.vaccineId, certificate.appliedDoses, doseIndex)}
                      text={certificate.doses === 1 ? 'dose única' : `${doseIndex + 1}ª dose`}
                      selected={certificate.appliedDoses >= doseIndex + 1}
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
