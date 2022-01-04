import { Dimensions } from 'react-native'
import styled from 'styled-components/native'
import { Text as PaperText } from 'react-native-paper'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Pressable } from '../../atoms'

const { width } = Dimensions.get('screen')

export const Container = styled(Pressable)<{ gap?: boolean}>`
  align-items: center;
  border: 1px solid ${(props) => props.theme.palette.complementary3};
  border-radius: 2px;
  flex: 1;
  height: ${(width - 48) / 2}px;
  justify-content: center;
  margin-right: ${(props) => props.gap ? 16 : 0}px;
  padding: 14px;
`

export const Text = styled(PaperText)`
  color: ${(props) => props.theme.palette.primary};
  font-size: 16px;
  text-align: center;
  text-transform: uppercase;
`

export const Icon = styled(MaterialIcons).attrs((props) => ({
  color: props.theme.palette.primary
}))`
  font-size: 28px
`
