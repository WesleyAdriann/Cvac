
import styled, { css } from 'styled-components/native'
import { Text as PaperText, Button as PaperButton } from 'react-native-paper'

import { TButtonMore, IButton } from './index'

type IStyledButton = Omit<IButton, 'text' | 'icon'>
export const StyledButton = styled(PaperButton).attrs(() => ({
  contentStyle: {
    padding: 6
  }
}))<IStyledButton>`
  border-color: ${(props) => {
    if (props.mode === 'outlined') return props.theme.palette.complementary3
    return 'transparent'
  }};
  margin: ${({ marginStyle }) => (typeof marginStyle === 'number') ? `${marginStyle}px` : (marginStyle ?? 0)};
  padding: ${({ paddingStyle }) => (typeof paddingStyle === 'number') ? `${paddingStyle}px` : (paddingStyle ?? 0)};
  elevation: 0;


  ${({ flex }) => flex && css`
    flex: ${flex};
  `}
`

export const StyledText = styled(PaperText)<{ mode: TButtonMore }>`
  color: ${(props) => {
    switch (props.mode) {
      case 'contained':
        return props.theme.fontColorInvert
      case 'outlined':
        return props.theme.palette.primary
      default:
        return props.theme.fontColor
    }
  }};

  font-weight: ${(props) => props.mode === 'contained' ? 'bold' : 'normal'};
  font-size: 18px;
`
