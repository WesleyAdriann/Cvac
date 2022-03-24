import { useCallback } from 'react'
import { differenceInYears } from 'date-fns'

import { useAppSelector } from '~/store'
import { IVaccineCalendar } from '~/types'
import { logger } from '~/utils'

import { usePushNotification } from './usePushNotification'

export const useCreateDefaultNotifications = () => {
  const TAG = 'useCreateDefaultNotifications'
  const pushNotification = usePushNotification()
  const { calendars, vaccines } = useAppSelector((state) => ({
    calendars: state.calendars,
    vaccines: state.vaccines
  }))

  const findCalendar = useCallback((birthDate: Date) => {
    const diff = differenceInYears(new Date(), birthDate)
    const [id, value] = Object.entries(calendars).find(([_key, value]) => diff >= value.startAge && diff <= value.endAge) ?? []

    return {
      ...value,
      id
    }
  }, [calendars])

  const findVaccines = useCallback((calendarId: string) => {
    const vaccinesCalendar: IVaccineCalendar[] = []
    for (const vaccine in vaccines) {
      const vaccinesFromCalendar = vaccines[vaccine].calendars.filter(({ id }) => id === calendarId)
      vaccinesCalendar.push(...vaccinesFromCalendar)
    }
    return vaccinesCalendar
  }, [vaccines])

  const createNotifications = useCallback(() => {
    // pushNotification.createLocal('vacina x', new Date(), 'default')
  }, [])

  const main = useCallback((birthDate: Date, dependentId: string) => {
    const calendar = findCalendar(birthDate)
    const vaccinesToCreate = findVaccines(calendar.id ?? '')
    createNotifications()

    logger(TAG, calendar, vaccinesToCreate)
  }, [createNotifications, findCalendar, findVaccines])

  return main
}
