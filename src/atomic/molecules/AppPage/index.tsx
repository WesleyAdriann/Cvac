import React from 'react'

import { Flex } from '../../atoms'
import { Dialog, IDialog } from '../Dialog'

import { Container } from './style'

export interface IAppPage {
  testID?: string
  children: React.ReactNode
  scroll?: boolean
  dialog?: IDialog
}

export const Component: React.FC<IAppPage> = ({ testID = 'AppPage', children, scroll, dialog, ...props }) => (
  <Container testID={testID} safeAreaView {...props}>
    <Flex paddingStyle={16} flex={1} scroll={scroll}>
      {children}
    </Flex>
    {!!dialog && <Dialog {...dialog}/> }
  </Container>
)

export const AppPage = React.memo(Component)
