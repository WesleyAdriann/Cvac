import React from 'react'

import { Flex, Text, Pressable } from '../../atoms'

import { Wrapper, DateWrapper, DateText } from './style'

export interface INotificationItem {
  testID?: string
  onPress: () => void
  day: string,
  month: string
  year: string,
  title: string
  descriptions: string[]
}

const Component: React.FC<INotificationItem> = ({ testID = 'NotificationItems', onPress, day, month, year, title, descriptions, ...props }) => (
  <Pressable onPress={onPress} testID={testID} {...props}>
    <Wrapper flexDirection='row'>
      <DateWrapper alignItems='center' justifyContent='center' flex={1.2}>
        <DateText size={24} weight='bold' >
          {day}
        </DateText>
        <DateText>
          {month}
        </DateText>
        <DateText>
          {year}
        </DateText>
      </DateWrapper>
      <Flex flex={3} justifyContent='center' paddingStyle={24}>
        <Flex marginStyle='0 8px 8px 0'>
          <Text size={22} >
            {title}
          </Text>

        </Flex>
        {
          descriptions?.map((description) => !!description && (
            <Flex key={description} marginStyle='4px 0 0'>
              <Text>
                {description}
              </Text>
            </Flex>
          ))
        }
      </Flex>
    </Wrapper>
  </Pressable>
)

export const NotificationItem = React.memo(Component)
