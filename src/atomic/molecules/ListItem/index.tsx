import React from 'react'

import { Flex } from '../../atoms/Flex'

import { StyledListItem } from './styles'

export interface IListItemStyle {
  marginLeft?: number
  noBorder?: boolean
}

export interface IListItem extends IListItemStyle {
  testID?: string
  text: string
  onPress: () => void
}

const Component: React.FC<IListItem> = ({ testID = 'IListItem', text, onPress, marginLeft, noBorder, ...props }) => (
  <Flex testID={testID} {...props}>
    <StyledListItem
      title={text}
      onPress={onPress}
      marginLeft={marginLeft}
      noBorder={noBorder}
    />
  </Flex>
)

export const ListItem = React.memo(Component)
