import styled from 'styled-components/native'
import { ActivityIndicator } from 'react-native-paper'

import { ILoader } from './index'

export const StyledLoader = styled(ActivityIndicator).attrs<ILoader>((props) => ({
  animating: true,
  color: props.theme.palette.primary

}))<ILoader>`
  margin: ${(props) => props.margin ?? 0}px;
`
