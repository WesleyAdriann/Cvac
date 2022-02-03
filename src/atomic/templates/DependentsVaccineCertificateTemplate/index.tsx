import React from 'react'

import { AppPage } from '../../molecules'

import { Button, Flex } from '../../atoms'
import { ScrollView } from 'react-native'

export interface IDependentsVaccineCertificateTemplate {
  testID?: string
  checkIsTouch: (typeButton: number) => void
}

export const DependentsVaccineCertificateTemplate: React.FC<IDependentsVaccineCertificateTemplate> = ({
  testID = 'DependentsVaccineCertificateTemplate',
  checkIsTouch,

  ...props
}) => {
  return (
    <AppPage testID={testID} {...props} scroll padding={16}>
      <Flex flex={1} justifyContent='center'>
        <ScrollView>
          <Button
            onPress={() => checkIsTouch(1)}
            text='Pessoa X'
            mode='outlined'
            marginStyle='0 0 16px'
          />
          <Button
            onPress={() => checkIsTouch(1)}
            text='Pessoa Y'
            mode='outlined'
            marginStyle='0 0 16px'
          />
          <Button
            onPress={() => checkIsTouch(1)}
            text='Pessoa Z'
            mode='outlined'
            marginStyle='0 0 16px'
          />
        </ScrollView>
      </Flex>

      <Flex>
        <Button
          onPress={() => checkIsTouch(2)}
          text='Cadastrar Dependente'
          mode='contained'
        />
      </Flex>

    </AppPage>
  )
}
