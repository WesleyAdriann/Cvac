import React from 'react'

import { AppPage, Accordion, ListItem } from '../../molecules'

export interface ICalendarsTemplate {
  testID?: string
  onPress: () => void
}

export const CalendarsTemplate: React.FC<ICalendarsTemplate> = ({
  testID = 'CalendarsTemplate',
  onPress,
  ...props
}) => {
  return (
    <AppPage testID={testID} {...props} scroll padding={0}>
      <Accordion text='Criança'>
        <ListItem onPress={onPress} text='Vacina X' marginLeft={32} noBorder/>
        <ListItem onPress={onPress} text='Vacina Y' marginLeft={32} noBorder/>
        <ListItem onPress={onPress} text='Vacina Z' marginLeft={32} />
      </Accordion>
      <Accordion text='Adolescente'>
        <ListItem onPress={onPress} text='Vacina X' marginLeft={32} noBorder/>
        <ListItem onPress={onPress} text='Vacina Y' marginLeft={32} noBorder/>
        <ListItem onPress={onPress} text='Vacina Z' marginLeft={32} />
      </Accordion>
      <Accordion text='Adulto'>
        <ListItem onPress={onPress} text='Vacina X' marginLeft={32} noBorder/>
        <ListItem onPress={onPress} text='Vacina Y' marginLeft={32} noBorder/>
        <ListItem onPress={onPress} text='Vacina Z' marginLeft={32} />
      </Accordion>
      <Accordion text='Idoso'>
        <ListItem onPress={onPress} text='Vacina X' marginLeft={32} noBorder/>
        <ListItem onPress={onPress} text='Vacina Y' marginLeft={32} noBorder/>
        <ListItem onPress={onPress} text='Vacina Z' marginLeft={32} />
      </Accordion>
    </AppPage>
  )
}
