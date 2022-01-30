import React from 'react'

import { AppPage, Accordion, ListItem } from '../../molecules'

export interface ICalendarsTemplate {
  testID?: string
}

export const CalendarsTemplate: React.FC<ICalendarsTemplate> = ({
  testID = 'CalendarsTemplate',

  ...props
}) => {
  return (
    <AppPage testID={testID} {...props} scroll padding={0}>
      <Accordion text='Criança'>
        <ListItem onPress={() => null} text='Criança' marginLeft={32} noBorder/>
      </Accordion>
      <Accordion text='Criança'>
        <ListItem onPress={() => null} text='Criança' marginLeft={32} noBorder/>
      </Accordion>
    </AppPage>
  )
}
