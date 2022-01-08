import styled from 'styled-components/native'

import { Appbar } from 'react-native-paper'

export const Header = styled(Appbar.Header)`
  background-color: ${(props) => props.theme.palette.secondary};
`
