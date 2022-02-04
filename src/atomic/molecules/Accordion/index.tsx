import React from 'react'
import { List } from 'react-native-paper'

import { Flex } from '../../atoms/Flex'

import { StyledAccordion } from './styles'

export interface IAccordion {
  testID?: string
  text: string
  children: React.ReactNode
}

const Component: React.FC<IAccordion> = ({ testID = 'Accordion', text, children, ...props }) => (
  <Flex testID={testID} {...props}>
    <List.Section>
      <StyledAccordion title={text}>
        {children}
      </StyledAccordion>
    </List.Section>
  </Flex>
)

export const Accordion = React.memo(Component)
