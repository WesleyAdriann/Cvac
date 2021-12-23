import React from 'react'
import { Pressable as RNPressable, PressableProps } from 'react-native'

import { assignTestId } from '../../../utils'

export interface IPressable extends PressableProps {
  testID?: string
  children: React.ReactNode
}

const Component: React.FC<IPressable> = ({ testID = 'Pressable', children, ...props }) => (
   <RNPressable {...props} {...assignTestId('Pressable', testID)} >{children}</RNPressable>
)

export const Pressable = React.memo(Component)
