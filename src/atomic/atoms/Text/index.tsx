import React from 'react'

import { StyledText } from './styles'

import { assignTestId } from '../../../utils'

export interface IText {
  testID?: string
  children: React.ReactNode
  size?: number
  align?: 'left' | 'center' | 'right'
}

const Component: React.FC<IText> = ({ testID = 'Text', children, ...props }) => (
  <StyledText {...props} {...assignTestId('Text', testID)}>{children}</StyledText>
)

export const Text = React.memo(Component)
