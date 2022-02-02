import styled from 'styled-components/native'

import { List } from 'react-native-paper'

export const StyledAccordion = styled(List.Accordion).attrs((props) => ({
  titleStyle: {
    color: props.theme.fontColor
  },
  theme: {
    ...props.theme,
    colors: {
      text: props.theme.palette.primary
    }
  }
}))`
  border-bottom-width: 0.5px;
  border-color: ${(props) => props.theme.palette.outline};
  border-style: solid;
  height: 50px;
`
