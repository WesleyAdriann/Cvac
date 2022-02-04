import React from 'react'

import { AppPage, IAppPage } from '../../molecules'

import { Button, Flex } from '../../atoms'

export interface IDependentsNotificationsTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  onPress: () => void
}

export const DependentsNotificationsTemplate: React.FC<IDependentsNotificationsTemplate> = ({
  testID = 'DependentsNotificationsTemplate',
  onPress,
  ...props
}) => {
  return (
    <AppPage {...props} testID={testID} scroll padding={16}>
      <Flex flex={1} justifyContent='center'>
        <Button
          onPress={onPress}
          text='Dependente'
          mode='outlined'
          marginStyle='0 0 16px'
        />
        <Button
          onPress={onPress}
          text='Dependente 2'
          mode='outlined'
          marginStyle='0 0 16px'/>
        <Button
          onPress={onPress}
          text='Dependente 3'
          mode='outlined'
          marginStyle='0 0 16px'/>
      </Flex>
    </AppPage>
  )
}
