import React from 'react'

import {AppPage} from '../../molecules'

import {Button} from '../../atoms'

export interface IDependentsNotificationsTemplate {
    testID?: string
}

export const DependentsNotificationsTemplate: React.FC<IDependentsNotificationsTemplate> = ({
    testID = 'DependentsNotificationsTemplate',

    ...props
}) => {
    return(
    <AppPage testID={testID} {...props} scroll padding={16}>
        <Button
        onPress={()=>null}
        text='Dependente'
        />
        <Button
        onPress={()=>null}
        text='Dependente 2'/>
        <Button
        onPress={()=>null}
        text='Dependente 3'/>
    </AppPage>




    )
}
