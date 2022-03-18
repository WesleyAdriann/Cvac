import React from 'react'

import { IDependent } from '~/store'

import { AppPage, IAppPage } from '../../molecules'
import { Button, Flex } from '../../atoms'

export interface IDependentsNotificationsTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  onPress: (dependentId: string) => void
  dependents: { [key: string]: IDependent }
}

export const DependentsNotificationsTemplate: React.FC<IDependentsNotificationsTemplate> = ({
  testID = 'DependentsNotificationsTemplate',
  onPress,
  dependents,
  ...props
}) => {
  return (
    <AppPage {...props} testID={testID} padding={0}>
      <Flex scroll paddingStyle={16} contentContainerStyle={{ justifyContent: 'center' }}>
        {
          Object.entries(dependents ?? {}).map(([key, value]) => (
            <Button
              key={key}
              onPress={() => onPress(key)}
              text={value.name}
              mode='outlined'
              marginStyle='0 0 16px'
            />
          ))
        }
      </Flex>
    </AppPage>
  )
}
