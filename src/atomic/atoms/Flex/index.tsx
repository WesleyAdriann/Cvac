import React from 'react'
import { View, ViewProps, SafeAreaView } from 'react-native'

import { assignTestId } from '../../../utils'

export interface IFlex extends ViewProps {
  testID?: string
  safeAreaView?: boolean
  children: React.ReactNode
}

const Component: React.FC<IFlex> = ({ testID = 'Flex', children, ...props }) => {
  if (props.safeAreaView) {
    return <SafeAreaView {...props} {...assignTestId('SafeAreaView', testID)} >{children}</SafeAreaView>
  }
  return <View {...props} {...assignTestId('View', testID)} >{children}</View>
}

export const Flex = React.memo(Component)
