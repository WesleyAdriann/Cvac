import styled from 'styled-components/native'
import MaterialIcons from 'react-native-vector-icons/MaterialCommunityIcons'

import { Text as AtomText, Pressable } from '../../atoms'
import { IVaccineDose } from './index'

type TProps = Pick<IVaccineDose, 'selected'>

export const Container = styled(Pressable)<TProps>`
  background-color: ${({ theme, selected }) => selected ? theme.palette.secondary : theme.colors.gray};
  border-radius: 4px;
  padding: 16px;
  border-width: 1px;
  border-color: ${({ theme, selected }) => selected ? theme.palette.primary : theme.colors.gray};
  position: relative;
  flex: 1;
`

export const Text = styled(AtomText)`
  text-align: center;
`

export const Icon = styled(MaterialIcons).attrs<TProps>((props) => ({
  color: props.selected ? props.theme.palette.primary : props.theme.fontColor
}))<TProps>`
  font-size: 24px
  position: absolute;
  right: 8px;
  top: 8px;
`
