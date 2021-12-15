import React from 'react'

import { StyledButton, StyledText } from './styles'

import { assignTestId } from '../../../utils'

export type TButtonMore = 'text' | 'outlined' | 'contained'
export interface IButton {
  testID?: string
  text: string
  mode?: TButtonMore
  onPress: () => void
}

const Component: React.FC<IButton> = ({ testID = 'Button', text, mode = 'contained', ...props }) => (
  <StyledButton mode={mode} {...props} {...assignTestId('Pressable', testID)}>
    <StyledText mode={mode}>{text}</StyledText>
  </StyledButton>
)

export const Button = React.memo(Component)
