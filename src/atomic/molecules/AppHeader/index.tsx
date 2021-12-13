import React from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { Appbar } from 'react-native-paper'

export const AppHeader: React.FC<NativeStackHeaderProps> = ({ navigation, back, options }) => (
  <Appbar.Header>
    {back ? <Appbar.BackAction onPress={navigation.goBack} /> : null}
    <Appbar.Content title={options.title} />
  </Appbar.Header>
)
