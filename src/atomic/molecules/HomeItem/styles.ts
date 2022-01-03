import { Dimensions, StyleSheet } from 'react-native'
import styled from 'styled-components/native'
import { Text as PaperText } from 'react-native-paper'
// import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Pressable } from '../../atoms'

const { width } = Dimensions.get('screen')

export const Container = styled(Pressable)`
  align-items: center;
  border: ${StyleSheet.hairlineWidth}px solid ${(props) => props.theme.palette.complementary3};
  border-radius: 2px;
  flex: 1;
  height: ${(width - 40) / 2};
  justify-content: center;
  padding: 14px;
`

export const Text = styled(PaperText)`
  color: ${(props) => props.theme.palette.primary};
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
`

export const Icon = styled.View.attrs((props) => ({
  color: props.theme.palette.primary
}))`
  font-size: 28px
`
