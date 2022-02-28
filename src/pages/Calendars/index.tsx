import React, { useEffect, useState } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { useAppSelector } from '~/store'
import { ICalendar } from '~/atomic/templates/CalendarsTemplate'
import { CalendarsTemplate } from '~/atomic'
import { ECalendarsName } from '~/utils'
import { TCollectionCalendarName } from '~/services/firebase'

export const Calendars: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const {
    calendarsReducer: calendars,
    vaccinesReducer: vaccines
  } = useAppSelector((state) => state)

  const [items, setItems] = useState<ICalendar[]>([])
  const [isLoading, setIsLoading] = useState(true)

  const formatDescription = (type: TCollectionCalendarName, startAge: number, endAge: number) => {
    if (type === 'elder') return `a partir de ${startAge} anos`
    if (type === 'kid') return `ao nascer ate ${endAge} anos`

    return `${startAge} anos até ${endAge} anos`
  }

  const parseCalendars = () => {
    const parsedCalendars: {[key: string]: ICalendar & {age:number}} = {}
    for (const vaccine in vaccines) {
      vaccines[vaccine].calendars.map((calendar) => {
        const calendarId = calendar?.id.id
        parsedCalendars?.[calendarId] ??
          Object.assign(parsedCalendars, {
            [calendarId]: {
              text: ECalendarsName[calendars[calendarId].name],
              description: formatDescription(calendars[calendarId].name, calendars[calendarId].startAge, calendars[calendarId].endAge),
              id: calendarId,
              age: calendars[calendarId].startAge,
              vaccines: []
            }
          })
        parsedCalendars[calendarId].vaccines.push({ text: vaccines[vaccine].name, id: vaccine })
        return undefined
      })
    }
    const sortedCalendar = Object.values(parsedCalendars)
      .sort((calendarA, calendarB) => calendarA.age - calendarB.age)

    setItems(sortedCalendar)
    setIsLoading(false)
  }

  useEffect(() => {
    if (!items.length) parseCalendars()
  }, [])

  const onPress = (vaccineId: string, calendarId: string) => {
    navigation.push('vaccineDetails', { vaccineId, calendarId })
  }

  return (
    <CalendarsTemplate
      onPress={onPress}
      isLoading={isLoading}
      calendars={items}
    />
  )
}
