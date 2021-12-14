import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { Appbar } from 'react-native-paper'

import { assignTestId } from '../../../utils'
export interface IAppHeader extends Partial<NativeStackHeaderProps> {
  testID?: string
}

export const AppHeader: React.FC<IAppHeader> = ({ testID = 'AppHeader', navigation, back, ...props }) => (
  <Appbar.Header {...props} {...assignTestId('View', testID)}>
    {back ? <Appbar.BackAction onPress={navigation?.goBack} /> : null}
    <Appbar.Content title={props?.options?.title} />
  </Appbar.Header>
)
