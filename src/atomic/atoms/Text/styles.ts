import styled from 'styled-components/native'
import { Text as PaperText } from 'react-native-paper'

import { IText } from './index'

export const StyledText = styled(PaperText)<IText>`
  text-align: ${(props) => props.align ?? 'left'};
  font-size: ${(props) => props.size ?? props.theme.fontSize}px;
`
