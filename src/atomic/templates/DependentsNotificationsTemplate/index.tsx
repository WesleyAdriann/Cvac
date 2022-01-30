import React from 'react'

import { AppPage } from '../../molecules'

import { Button } from '../../atoms'

export interface IDependentsNotificationsTemplate {
    testID?: string
}

export const DependentsNotificationsTemplate: React.FC<IDependentsNotificationsTemplate> = ({
  testID = 'DependentsNotificationsTemplate',

  ...props
}) => {
  return (
    <AppPage testID={testID} {...props} scroll padding={16}>
      <Button
        onPress={() => null}
        text='Dependente'
        mode='outlined'
        marginStyle='0 0 16px'
      />
      <Button
        onPress={() => null}
        text='Dependente 2'
        mode='outlined'
        marginStyle='0 0 16px'/>
      <Button
        onPress={() => null}
        text='Dependente 3'
        mode='outlined'
        marginStyle='0 0 16px'/>
    </AppPage>

  )
}
