import React from 'react'

import { AppPage, Accordion, ListItem } from '../../molecules'

export interface ICalendarsTemplate {
  testID?: string
  checkIsTouch: (item: boolean) => void
}

export const CalendarsTemplate: React.FC<ICalendarsTemplate> = ({
  testID = 'CalendarsTemplate',
  checkIsTouch,

  ...props
}) => {
  return (
    <AppPage testID={testID} {...props} scroll padding={0}>
      <Accordion text='Criança'>
        <ListItem onPress={() => checkIsTouch(true)} text='Vacina X' marginLeft={32} noBorder/>
        <ListItem onPress={() => checkIsTouch(true)} text='Vacina Y' marginLeft={32} noBorder/>
        <ListItem onPress={() => checkIsTouch(true)} text='Vacina Z' marginLeft={32} noBorder/>
      </Accordion>
      <Accordion text='Adolescente'>
        <ListItem onPress={() => checkIsTouch(true)} text='Vacina X' marginLeft={32} noBorder/>
        <ListItem onPress={() => checkIsTouch(true)} text='Vacina Y' marginLeft={32} noBorder/>
        <ListItem onPress={() => checkIsTouch(true)} text='Vacina Z' marginLeft={32} noBorder/>
      </Accordion>
      <Accordion text='Adulto'>
        <ListItem onPress={() => checkIsTouch(true)} text='Vacina X' marginLeft={32} noBorder/>
        <ListItem onPress={() => checkIsTouch(true)} text='Vacina Y' marginLeft={32} noBorder/>
        <ListItem onPress={() => checkIsTouch(true)} text='Vacina Z' marginLeft={32} noBorder/>
      </Accordion>
      <Accordion text='Idoso'>
        <ListItem onPress={() => checkIsTouch(true)} text='Vacina X' marginLeft={32} noBorder/>
        <ListItem onPress={() => checkIsTouch(true)} text='Vacina Y' marginLeft={32} noBorder/>
        <ListItem onPress={() => checkIsTouch(true)} text='Vacina Z' marginLeft={32} noBorder/>
      </Accordion>
    </AppPage>
  )
}
