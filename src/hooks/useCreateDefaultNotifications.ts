import { useCallback } from 'react'
import {
  differenceInYears,
  differenceInMonths,
  addMonths,
  addDays,
  setHours,
  startOfHour
} from 'date-fns'

import { useAppSelector } from '~/store'
import { logger } from '~/utils'
import { collectionCalendarVaccine, colletionCalendar } from '~/services/firebase'
import { ICalendarVaccine } from '~/types'

import { usePushNotification } from './usePushNotification'

export const useCreateDefaultNotifications = () => {
  const TAG = 'useCreateDefaultNotifications'
  const pushNotification = usePushNotification()
  const { calendars, vaccines } = useAppSelector((state) => ({
    calendars: state.calendars,
    vaccines: state.vaccines
  }))

  const getCalendars = useCallback((birthDate: Date) => {
    const ordedCalendars = Object.entries(calendars).sort(([, valueA], [, valueB]) => valueA.endAge - valueB.endAge)

    const diff = differenceInYears(new Date(), birthDate)
    const userCalendars: string[] = []
    for (const [key, calendar] of ordedCalendars) {
      if (diff <= calendar.endAge) userCalendars.push(key)
    }

    return userCalendars
  }, [calendars])

  const getNotificationsToCreate = useCallback(async (calendarIds: string[]) => {
    const notifications: ICalendarVaccine[] = []
    for (const calendarId of calendarIds) {
      const calendarRef = colletionCalendar.doc(calendarId)
      const response = await collectionCalendarVaccine.where('calendarId', '==', calendarRef).get()

      response.docs.forEach((calendarVaccine) => {
        const { vaccineId, ...data } = calendarVaccine.data()
        notifications.push({
          ...data,
          calendarId,
          vaccineId: vaccineId.id
        })
      })
    }
    return notifications
  }, [])

  const formatMessage = (vaccineId: string, when: number[], index: number) => (
    `${vaccines[vaccineId].name} ${when.length === 1 ? 'dose única' : `${index + 1}ª dose`}`
  )

  const dateHourFormat = (date = new Date()) => setHours(startOfHour(date), 9)

  const formatNotificationsDate = useCallback((notificationsToCreate: ICalendarVaccine[], birthDate: Date) => {
    const userMonths = differenceInMonths(new Date(), birthDate)
    let adultVaccines = 0
    const formated: any = []

    notificationsToCreate.forEach((notification, indexNotification) => {
      const tempParse: any = []
      logger(TAG, calendars[notification.calendarId])
      if (calendars[notification.calendarId].name === 'kid') {
        return
      }
      adultVaccines++
      const doseMissed = userMonths > notification.when[0]
      notification.when.forEach((whenDose, indexDose) => {
        const fnDate = indexDose === 0
          ? () => addMonths(addDays(dateHourFormat(), adultVaccines * 15), doseMissed ? 0 : whenDose - userMonths)
          : () => addMonths(tempParse[0].date, whenDose - notification.when[0])
        tempParse.push({
          message: formatMessage(notification.vaccineId, notification.when, indexDose),
          calendar: calendars[notification.calendarId].name,
          date: fnDate()
        })
      })
      formated.push(...tempParse)
    })
    logger(TAG, 'formated', JSON.stringify(formated))
    return formated
  }, [calendars])

  const createNotifications = useCallback((notificationsToCreate: ICalendarVaccine[]) => {
    pushNotification.createLocal('vacina x', new Date(), 'default')
  }, [pushNotification])

  const main = useCallback(async (birthDate: Date, dependentId: string) => {
    const calendarIds = getCalendars(birthDate)
    const notificationsToCreate = await getNotificationsToCreate(calendarIds ?? '')
    const notifications = formatNotificationsDate(notificationsToCreate, birthDate)
    // createNotifications(notificationsToCreate)

    logger(TAG, calendarIds, notificationsToCreate)
  }, [formatNotificationsDate, getCalendars, getNotificationsToCreate])

  return main
}
