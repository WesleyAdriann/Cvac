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
  const formatWhen = (value: number, index: number) => {
    if (value === 0) return 'ao nascer'
    if (value < 16) return `${value} meses`
    if ((value / 12) % 1 === 0) return `a partir de ${value / 12} anos`
    return `${index + 1}ª dose ${value % 12} meses após a primeira`
  }

  const formatLoop = () => {
    const text = []
    if (loop) {
      text.push(`\na cada ${loop / 12} ano`)
      if (loop / 12 > 1) text.push('s')
    }
    return text.join('')
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
          <Text weight='bold'>Doses</Text>
          <Text marginBottom={8}>
            {when.length === 1 ? 'única' : when.length}
          </Text>

          <Text weight='bold'>Quando</Text>
          <Text marginBottom={8}>
            {when.map(formatWhen).join('\n')}
            {formatLoop()}
          </Text>

          <Text weight='bold'>Prevenção</Text>
          <Text marginBottom={8}>
            {disease}
          </Text>

          {!!notes.length &&
            <Text>
              <Text weight='bold'>Observaçōes</Text>
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
