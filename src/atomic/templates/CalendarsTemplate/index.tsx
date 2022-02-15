import React from 'react'

import { AppPage, IAppPage, Accordion, ListItem } from '../../molecules'

export interface ICalendar {
  id: string
  text: string
  description: string
  vaccines: {
    text: string,
    id: string,
  }[]
}

export interface ICalendarsTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  onPress: (id: string) => void
  calendars: ICalendar[]
}

export const CalendarsTemplate: React.FC<ICalendarsTemplate> = ({
  testID = 'CalendarsTemplate',
  onPress,
  calendars,
  ...props
}) => {
  return (
    <AppPage {...props} testID={testID} scroll padding={0}>
      {
        calendars?.map((calendar) => (
          <Accordion text={calendar.text} description={calendar.description} key={calendar.id}>
            {
              calendar.vaccines.map((vaccine, index) => (
                <ListItem
                  key={vaccine.id}
                  onPress={() => onPress(vaccine.id)}
                  text={vaccine.text}
                  marginLeft={32}
                  noBorder={index !== calendar.vaccines.length}
                />
              ))
            }
          </Accordion>
        ))
      }
    </AppPage>
  )
}
