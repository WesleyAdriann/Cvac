import React from 'react'
import { ViewProps, ViewStyle } from 'react-native'

import { assignTestId } from '../../../utils'

import { StyledView, StyledSafeAreaView } from './styles'

export interface IFlexCustomStyle extends Omit<ViewStyle, 'padding' | 'margin'> {
  marginStyle?: number | string
  paddingStyle?: number | string
}

export interface IFlex extends ViewProps, IFlexCustomStyle {
  testID?: string
  safeAreaView?: boolean
  children: React.ReactNode
}

const Component: React.FC<IFlex> = ({ testID = 'Flex', children, safeAreaView, ...props }) => {
  if (safeAreaView) {
    return <StyledSafeAreaView {...props} {...assignTestId('SafeAreaView', testID)}>{children}</StyledSafeAreaView>
  }

  return <StyledView {...props} {...assignTestId('View', testID)} >{children}</StyledView>
}

export const Flex = React.memo(Component)
