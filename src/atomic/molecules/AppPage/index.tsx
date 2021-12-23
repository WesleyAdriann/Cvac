import React from 'react'

import { Flex } from '../../atoms'

import { Container } from './style'

export interface IAppPage {
  testID?: string
  children: React.ReactNode
}

export const Component: React.FC<IAppPage> = ({ testID = 'AppPage', children, ...props }) => (
  <Container testID={testID} safeAreaView {...props}>
    <Flex paddingStyle={16} flex={1}>
      {children}
    </Flex>
  </Container>
)

export const AppPage = React.memo(Component)
