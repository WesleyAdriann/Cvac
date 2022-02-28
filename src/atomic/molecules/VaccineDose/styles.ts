import styled from 'styled-components/native'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Text as AtomText, Pressable } from '../../atoms'
import { IVaccineDose } from './index'

type TContainer = Pick<IVaccineDose, 'selected' | 'flexBasis'>

export const Container = styled(Pressable)<TContainer>`
  background-color: ${({ theme, selected }) => selected ? theme.palette.secondary : theme.colors.gray};
  border-radius: 4px;
  padding: 16px;
  border-width: 1px;
  border-color: ${({ theme, selected }) => selected ? theme.palette.primary : theme.colors.gray};
  position: relative;
  flex-basis: ${(props) => props.flexBasis ?? 100}%;
  flex-grow: 1;
  flex-shrink: 1;
`

export const Text = styled(AtomText)`
  text-align: center;
`

type TIcon = Pick<IVaccineDose, 'selected'>
export const Icon = styled(MaterialIcons).attrs<TIcon>((props) => ({
  color: props.selected ? props.theme.palette.primary : props.theme.fontColor
}))<TIcon>`
  font-size: 24px
  position: absolute;
  right: 8px;
  top: 8px;
`
