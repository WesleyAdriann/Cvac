import React from 'react'

import { Dialog, IDialog } from '../Dialog'
import { Flex, Loader } from '../../atoms'

import { Container, LoadingOverlay } from './styles'

export interface IAppPage {
  testID?: string
  children: React.ReactNode
  scroll?: boolean
  dialog?: IDialog
  padding?: number
  isLoading?: boolean
}

export const Component: React.FC<IAppPage> = ({
  testID = 'AppPage',
  children,
  scroll,
  dialog,
  padding = 16,
  isLoading,
  ...props
}) => (
  <>
    { isLoading &&
      <LoadingOverlay>
        <Loader size={38} />
      </LoadingOverlay>
    }
    <Container testID={testID} safeAreaView {...props}>
      <Flex paddingStyle={padding} flex={1} scroll={scroll}>
        {children}
      </Flex>
      {!!dialog && <Dialog {...dialog}/> }
    </Container>
  </>
)

export const AppPage = React.memo(Component)
