import styled from 'styled-components/native'

import { Flex } from '../../atoms'

export const Container = styled(Flex)`
  background-color: ${(props) => props.theme.backgroundColor};
  flex: 1;
`

export const LoadingOverlay = styled(Flex)`
  background-color: ${(props) => props.theme.palette.outline};
  height: 100%;
  justify-content: center;
  position: absolute;
  width: 100%;
  z-index: 2;
`
