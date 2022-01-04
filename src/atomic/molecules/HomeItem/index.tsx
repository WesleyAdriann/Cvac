import React from 'react'

import { Container, Icon, Text } from './styles'

export interface IHomeItem {
  testID?: string
  icon: string
  text: string
  gap?: boolean
  onPress: () => void
}

const Component: React.FC<IHomeItem> = ({ testID = 'HomeItem', text, icon, ...props }) => (
  <Container testID={testID} {...props}>
    <Icon name={icon} />
    <Text>{text}</Text>
  </Container>
)

export const HomeItem = React.memo(Component)
