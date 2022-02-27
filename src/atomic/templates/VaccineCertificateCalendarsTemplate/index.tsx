import React from 'react'

import { Text, Flex } from '../../atoms'
import { AppPage, ListItem, IAppPage } from '../../molecules'

type ICalendar = {
  name: string
  id: string
}

export interface IVaccineCertificateCalendarsTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  onPress: (calendarId: string) => void
  name?: string,
  calendars?: ICalendar[],
}

export const VaccineCertificateCalendarsTemplate: React.FC<IVaccineCertificateCalendarsTemplate> = ({
  testID = 'VaccineCertificateCalendarsTemplate',
  onPress,
  name = '',
  calendars = [],
  ...props
}) => {
  return (
    <AppPage {...props} testID={testID} padding={0}>
      <Flex flex={0.5} justifyContent='center'>
        <Text align='center' size={34}>
          {name}
        </Text>
      </Flex>
      <Flex flex={2} scroll>
        {
          calendars.map((calendar) => (
            <ListItem
              key={calendar.id}
              onPress={() => onPress(calendar.id)}
              text={calendar.name}
              icon='chevron-right'
            />
          ))
        }
      </Flex>
    </AppPage>
  )
}
