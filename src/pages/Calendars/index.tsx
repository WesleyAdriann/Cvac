import React, { useEffect, useState } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { useAppSelector } from '~/store'
import { ICalendar } from '~/atomic/templates/CalendarsTemplate'
import { CalendarsTemplate } from '~/atomic'
import { ECalendarsName } from '~/utils'

export const Calendars: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const {
    calendarsReducer: calendars,
    vaccinesReducer: vaccines
  } = useAppSelector((state) => state)

  const [items, setItems] = useState<ICalendar[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const parseCalendars = () => {
    const parsedCalendars: {[key: string]: ICalendar & {age:number}} = {}
    for (const vaccine in vaccines) {
      vaccines[vaccine].calendars.map((calendar) => {
        const calendarId = calendar?.id.id
        parsedCalendars?.[calendarId] ??
          Object.assign(parsedCalendars, {
            [calendarId]: {
              text: ECalendarsName[calendars[calendarId].name],
              description: `${calendars[calendarId].startAge} anos até ${calendars[calendarId].endAge} anos`,
              id: calendarId, 
              age: calendars[calendarId].startAge, 
              vaccines: []
            }
          })
        parsedCalendars[calendarId].vaccines.push({ text: vaccines[vaccine].name, id: vaccine })
        return undefined
      })
    }
    const sortedCalendar = Object.values(parsedCalendars).sort((calendarA, calendarB) =>
      calendarA.age - calendarB.age)

    setItems(sortedCalendar)
    setIsLoading(false)
  }

  useEffect(() => {
    if (!items.length) parseCalendars()
  }, [])

  const onPress = () => {
    navigation.push('vaccineDetails')
  }

  return (
    <CalendarsTemplate
      onPress={onPress}
      isLoading={isLoading}
      calendars={items}
    />
  )
}
