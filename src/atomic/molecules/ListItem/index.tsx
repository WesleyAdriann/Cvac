import React from 'react'

import { Flex } from '../../atoms/Flex'

import { StyledListItem } from './style'

export interface IListItem {
  testID?: string
  text: string
  onPress: () => void
}

const Component: React.FC<IListItem> = ({ testID = 'IListItem', text, onPress, ...props }) => (
  <Flex testID={testID} {...props}>
    <StyledListItem
      title={text}
      onPress={onPress}
    />
  </Flex>
)

export const ListItem = React.memo(Component)
