import React from 'react'

import { StyledButton, StyledText } from './styles'

import { assignTestId } from '../../../utils'

export interface IButtomCustomStyle {
  marginStyle?: number | string
  paddingStyle?: number | string
  flex?: number
  square?: boolean
}

export type TButtonMore = 'text' | 'outlined' | 'contained'
export interface IButton extends IButtomCustomStyle {
  testID?: string
  text: string
  mode?: TButtonMore
  onPress: () => void
  iconSize?: number,
  isLoading?: boolean,
  fontSize?: number
}

const Component: React.FC<IButton> = ({ testID = 'Button', text, mode = 'contained', iconSize, isLoading, fontSize, ...props }) => (
  <StyledButton
    mode={mode}
    iconSize={iconSize}
    loading={isLoading}
    {...props}
    {...assignTestId('Pressable', testID)}
  >
    <StyledText mode={mode} fontSize={fontSize}>{text}</StyledText>
  </StyledButton>
)

export const Button = React.memo(Component)
