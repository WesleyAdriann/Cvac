import styled from 'styled-components/native'

import { Flex } from '../../atoms'

export const Container = styled(Flex)`
  background-color: ${(props) => props.theme.backgroundColor}
  flex: 1;
`
