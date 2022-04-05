import styled from 'styled-components/native'

import { Flex, Text } from '../../atoms'

export const Wrapper = styled(Flex)`
  border-style: solid;
  border-width: 1px;
  border-color: ${(props) => props.theme.palette.outline};
  margin-bottom: 8px;
  border-radius: 4px;
`

export const DateWrapper = styled(Flex)`
  background-color: ${(props) => props.theme.palette.secondary};
`

export const DateText = styled(Text)`
  text-transform: capitalize;
`
