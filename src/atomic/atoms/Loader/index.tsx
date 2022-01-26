import React from 'react'

import { StyledLoader } from './styles'

import { assignTestId } from '../../../utils'

export interface ILoader {
  testID?: string
  margin?: number
}

const Component: React.FC<ILoader> = ({ testID = 'Loader', ...props }) => <StyledLoader {...props} {...assignTestId('View', testID)} />

export const Loader = React.memo(Component)
