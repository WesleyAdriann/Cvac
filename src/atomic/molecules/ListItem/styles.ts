import styled from 'styled-components/native'

import { List } from 'react-native-paper'

import { IListItemStyle } from './index'

export const StyledListItem = styled(List.Item).attrs((props) => ({
  titleStyle: {
    color: props.theme.fontColor
  }
}))<IListItemStyle>`
  border-bottom-width: ${(props) => props.noBorder ? 0 : 0.5}px;
  border-color: ${(props) => props.theme.palette.outline};
  border-style: solid;
  height: 48px;
  margin-left: ${(props) => props.marginLeft ?? 0}px;
`
