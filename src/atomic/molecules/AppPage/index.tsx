import React from 'react'

import { Flex } from '../../atoms'

import { Container } from './style'

interface IAppPage {
  testID?: string
  children: React.ReactNode
}

export const AppPage: React.FC<IAppPage> = ({ testID = 'AppPage', children, ...props }) => (
  <Container testID={testID} safeAreaView {...props}>
    <Flex paddingStyle={16} flex={1}>
      {children}
    </Flex>
  </Container>
)
