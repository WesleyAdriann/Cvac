import React from 'react'

import { Container, Text, Icon } from './styles'

export interface IVaccineDose {
  testID?: string
  onPress: () => void
  selected?: boolean
  text: string
}

const Component: React.FC<IVaccineDose> = ({ testID = 'VaccineDose', onPress, selected, text, ...props }) => (
  <Container {...props} testID={testID} onPress={onPress} selected={!!selected}>
    <Text>{text}</Text>
    <Icon name={selected ? 'check-circle' : 'check-circle-outline'} selected={!!selected} />
  </Container>
)

export const VaccineDose = React.memo(Component)
