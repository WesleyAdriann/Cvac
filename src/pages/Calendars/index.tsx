import React, { useEffect, useState, useCallback } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'
import { ReactNativeFirebase } from '@react-native-firebase/app'

import { useAppSelector } from '~/store'
import { ICalendar } from '~/atomic/templates'
import { IDialog } from '~/atomic/molecules'
import { CalendarsTemplate } from '~/atomic'
import { ECalendarsName, logger } from '~/utils'
import { TCollectionCalendarName, collectionCalendarVaccine, colletionCalendar } from '~/services/firebase'

export const Calendars: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const TAG = 'Calendars'
  const {
    calendars,
    vaccines
  } = useAppSelector((state) => ({
    calendars: state.calendars,
    vaccines: state.vaccines
  }))

  const [calendarVaccines, setCalendarVaccines] = useState<ICalendar[]>([])
  const [isLoading, setIsLoading] = useState(true)
  const [dialog, setDialog] = useState<IDialog>({ visible: false })

  const formatDescription = (type: TCollectionCalendarName, startAge: number, endAge: number) => {
    if (type === 'elder') return `a partir de ${startAge} anos`
    if (type === 'kid') return `ao nascer ate ${endAge} anos`

    return `${startAge} anos até ${endAge} anos`
  }

  const getCalendarVaccine = useCallback(async () => {
    try {
      setIsLoading(true)
      const calendarVaccine = []
      for (const calendarId in calendars) {
        const calendarRef = colletionCalendar.doc(calendarId)
        const collectionData = await collectionCalendarVaccine.where('calendarId', '==', calendarRef).get()
        const responseVaccines = collectionData.docs.map((value) => ({
          id: value.data().vaccineId.id,
          text: vaccines[value.data().vaccineId.id].name
        }))
        const { name, startAge, endAge } = calendars[calendarId]
        calendarVaccine.push({
          id: calendarId,
          text: ECalendarsName[name],
          description: formatDescription(name, startAge, endAge),
          vaccines: responseVaccines,
          age: startAge
        })
      }

      const sortedCalendar = calendarVaccine.sort(({ age: ageA }, { age: ageB }) => ageA - ageB)
      logger(TAG, 'response', calendarVaccine)
      setCalendarVaccines(sortedCalendar)
    } catch (_error) {
      const error = _error as ReactNativeFirebase.NativeFirebaseError
      logger(TAG, 'error in getCalendarVaccine', error.message)

      setDialog({
        visible: true,
        title: 'Erro!',
        content: 'Houve um erro para carregar os calendários de vacinação',
        onPressOk: navigation.popToTop
      })
    } finally {
      setIsLoading(false)
    }
  }, [calendars, navigation.popToTop, vaccines])

  useEffect(() => {
    if (!calendarVaccines.length) getCalendarVaccine()
  }, [calendarVaccines.length, getCalendarVaccine])

  const onPress = (vaccineId: string, calendarId: string) => {
    navigation.push('vaccineDetails', { vaccineId, calendarId })
  }

  return (
    <CalendarsTemplate
      onPress={onPress}
      isLoading={isLoading}
      calendars={calendarVaccines}
      dialog={{
        ...dialog,
        onClose: () => setDialog({ visible: false })
      }}
    />
  )
}
