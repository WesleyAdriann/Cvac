import React from 'react'
import { ViewProps, ViewStyle, ScrollViewProps } from 'react-native'

import { assignTestId } from '~/utils'

import { StyledView, StyledSafeAreaView, StyledScroll } from './styles'

export interface IFlexCustomStyle extends Omit<ViewStyle, 'padding' | 'margin'> {
  marginStyle?: number | string
  paddingStyle?: number | string
}

export interface IFlex extends ViewProps, IFlexCustomStyle, ScrollViewProps {
  testID?: string
  safeAreaView?: boolean
  scroll?: boolean
  children: React.ReactNode
}

const Component: React.FC<IFlex> = ({ testID = 'Flex', children, safeAreaView, scroll, ...props }) => {
  if (safeAreaView) {
    return <StyledSafeAreaView {...props} {...assignTestId('SafeAreaView', testID)}>{children}</StyledSafeAreaView>
  }

  if (scroll) {
    return <StyledScroll {...props} {...assignTestId('ScrollView', testID)}>{children}</StyledScroll>
  }

  return <StyledView {...props} {...assignTestId('View', testID)} >{children}</StyledView>
}

export const Flex = React.memo(Component)
