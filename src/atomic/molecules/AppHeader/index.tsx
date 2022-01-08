import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { Appbar } from 'react-native-paper'
import { useTheme } from 'styled-components/native'

import { assignTestId } from '../../../utils'

import { Header } from './styles'
export interface IAppHeader extends Partial<NativeStackHeaderProps> {
  testID?: string
}

export const AppHeader: React.FC<IAppHeader> = ({ testID = 'AppHeader', navigation, back, ...props }) => {
  const theme = useTheme()

  return (
    <Header {...props} {...assignTestId('View', testID)}>
      {back ? <Appbar.BackAction onPress={navigation?.goBack} /> : null}
      <Appbar.Content title={props?.options?.title} color={theme.palette.complementary1} />
    </Header>
  )
}
