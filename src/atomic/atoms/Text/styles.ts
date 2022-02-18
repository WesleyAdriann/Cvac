import styled from 'styled-components/native'
import { Text as PaperText } from 'react-native-paper'

import { IText } from './index'

export const StyledText = styled(PaperText)<IText>`
  color: ${(props) => props.theme.fontColor};
  font-size: ${(props) => props.size ?? props.theme.fontSize}px;
  text-align: ${(props) => props.align ?? 'left'};
  text-decoration: ${(props) => props.underline ? `underline ${props.theme.fontColor}` : 'none'};
  margin-bottom: ${(props) => props.marginBottom ?? 0}px;
  font-weight: ${(props) => props.weight ?? 'normal'};

`
