import React from 'react'

import { AppPage, IAppPage } from '../../molecules'
import { Text, Flex } from '../../atoms'

export interface IVaccineDetailsTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  name: string
  disease: string
  notes?: string[]
  when: number[]
  loop?: number
}

export const VaccineDetailsTemplate: React.FC<IVaccineDetailsTemplate> = ({
  testID = 'VaccineDetailsTemplate',
  name,
  disease,
  notes = [],
  when,
  loop,
  ...props
}) => {
  console.log(notes)

  const formatWhen = (value: number) => {
    if (value === 0) return 'ao nascer'
    if (value < 16) return `${value} meses`
    if ((value / 12) % 1 === 0) return `${value / 12} anos`
    return `${value % 12} meses após a primeira dose`
  }
  return (
    <AppPage {...props} testID={testID} padding={16}>
      <Flex flex={0.5} justifyContent='center'>
        <Text align='center' size={30}>
          { name }
        </Text>
      </Flex>
      <Flex flex={2} scroll>
        <Flex>
          <Text marginBottom={4}>
            <Text weight='bold'>Quando</Text>:{' '}
            {when.map(formatWhen).join(' - ')} {!!loop && ` - a cada ${loop / 12} anos`}
          </Text>
          <Text marginBottom={4}>
            <Text weight='bold'>Doses</Text>:{' '}
            {when.length}
          </Text>
          <Text marginBottom={4}>
            <Text weight='bold'>Prevenção</Text>:{' '}
            {disease}
          </Text>
          {!!notes.length &&
            <Text marginBottom={4}>
              <Text weight='bold'>Observaçōes</Text>:{' '}
            </Text>
          }
          {
            notes?.map((note, index) => <Text key={index} marginBottom={6}>{note}</Text>)
          }
        </Flex>
      </Flex>
    </AppPage>
  )
}
