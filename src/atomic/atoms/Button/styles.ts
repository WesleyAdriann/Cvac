import styled, { css } from 'styled-components/native'
import { Text as PaperText, Button as PaperButton } from 'react-native-paper'

import { TButtonMore, IButton } from './index'

import { TTheme } from '~/tokens'

type IStyledButton = Omit<IButton, 'text'>
export const StyledButton = styled(PaperButton).attrs<IStyledButton>((props) => ({
  labelStyle: {
    color: defineColorText(props.theme, props.error, props.mode),
    fontSize: props.iconSize ?? 18
  },
  contentStyle: {
    paddingVertical: 6
  },
  color: props.error ? props.theme.palette.complementary2 : undefined
}))<IStyledButton>`
  border-color: ${({ mode, theme: { palette } }) =>
    mode === 'outlined'
      ? palette.complementary3
      : palette.primary
};
  border-width: ${(props) => props.mode === 'text' ? 0 : 1}px;
  margin: ${({ marginStyle }) => (typeof marginStyle === 'number') ? `${marginStyle}px` : (marginStyle ?? 0)};
  padding: ${({ paddingStyle }) => (typeof paddingStyle === 'number') ? `${paddingStyle}px` : (paddingStyle ?? 0)};
  elevation: 0;


  ${({ flex }) => flex && css`
    flex: ${flex};
  `}
`

const defineColorText = (theme: TTheme, error?: boolean, mode?: TButtonMore): string => {
  if (error) return theme.palette.complementary2
  switch (mode) {
  case 'contained':
    return theme.fontColorInvert
  case 'outlined':
    return theme.palette.primary
  default:
    return theme.fontColor
  }
}

export const StyledText = styled(PaperText)<Pick<IButton, 'mode' | 'fontSize' | 'error'>>`
  color: ${({ theme, mode, error }) => defineColorText(theme, error, mode)};

  font-weight: ${(props) => props.mode === 'contained' ? 'bold' : 'normal'};
  font-size: ${(props) => props.fontSize ?? 18}px;
`
