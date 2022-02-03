import React from 'react'

import { Flex } from '../../atoms/Flex'

import { StyledListItem, StyledIcon } from './styles'

export interface IListItemStyle {
  marginLeft?: number
  noBorder?: boolean
}

export interface IListItem extends IListItemStyle {
  testID?: string
  text: string
  onPress: () => void
  icon?: string,
  iconColor?: string
}

const Component: React.FC<IListItem> = ({ testID = 'IListItem', text, onPress, marginLeft, noBorder, icon, iconColor, ...props }) => (
  <Flex testID={testID} {...props}>
    <StyledListItem
      title={text}
      onPress={onPress}
      marginLeft={marginLeft}
      noBorder={noBorder}
      right={() => icon && <StyledIcon icon={icon} iconColor={iconColor} />}
    />
  </Flex>
)

export const ListItem = React.memo(Component)
