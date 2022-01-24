import styled from 'styled-components/native'

import { List } from 'react-native-paper'

export const StyledListItem = styled(List.Item).attrs((props) => ({
  titleStyle: {
    color: props.theme.fontColor
  }
}))`
  border-bottom-width: 0.5px;
  border-color: ${(props) => props.theme.palette.outline};
  border-style: solid;
`
