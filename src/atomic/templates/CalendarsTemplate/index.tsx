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
        <ListItem onPress={() => null} text='Vacina X' marginLeft={32} noBorder/>
        <ListItem onPress={() => null} text='Vacina Y' marginLeft={32} noBorder/>
        <ListItem onPress={() => null} text='Vacina Z' marginLeft={32} noBorder/>
      </Accordion>
      <Accordion text='Adolescente'>
        <ListItem onPress={() => null} text='Vacina X' marginLeft={32} noBorder/>
        <ListItem onPress={() => null} text='Vacina Y' marginLeft={32} noBorder/>
        <ListItem onPress={() => null} text='Vacina Z' marginLeft={32} noBorder/>
      </Accordion>
      <Accordion text='Adulto'>
        <ListItem onPress={() => null} text='Vacina X' marginLeft={32} noBorder/>
        <ListItem onPress={() => null} text='Vacina Y' marginLeft={32} noBorder/>
        <ListItem onPress={() => null} text='Vacina Z' marginLeft={32} noBorder/>
      </Accordion>
      <Accordion text='Idoso'>
        <ListItem onPress={() => null} text='Vacina X' marginLeft={32} noBorder/>
        <ListItem onPress={() => null} text='Vacina Y' marginLeft={32} noBorder/>
        <ListItem onPress={() => null} text='Vacina Z' marginLeft={32} noBorder/>
      </Accordion>
    </AppPage>
  )
}
