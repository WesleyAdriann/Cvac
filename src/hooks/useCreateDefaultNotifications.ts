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

interface INotificationFormated {
  message : string
  calendarId: string
  date: Date
  dose: string
  vaccine: string
}

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

  const formatMessage = useCallback((vaccineId: string, when: number[], index: number) => (
    `${vaccines[vaccineId].name}, ${formatDose(when, index)}`
  ), [vaccines])

  const formatDose = (when: number[], index: number) => `${when.length === 1 ? 'dose única' : `${index + 1}ª dose`}`

  const dateHourFormat = (date = new Date()) => setHours(startOfHour(date), 9)

  const formatNotificationsDate = useCallback((notificationsToCreate: ICalendarVaccine[], birthDate: Date) => {
    const userMonths = differenceInMonths(new Date(), birthDate)
    const formated: INotificationFormated[] = []

    let adultVaccines = 0
    notificationsToCreate.forEach((notification) => {
      const tempParse: INotificationFormated[] = []
      logger(TAG, calendars[notification.calendarId])
      const isKidVaccine = calendars[notification.calendarId].name === 'kid'
      !isKidVaccine && adultVaccines++

      const firstDoseMissed = userMonths > notification.when[0]
      notification.when.forEach((whenDose, indexDose) => {
        const fnDateVaccineKid = () => addMonths(addDays(dateHourFormat(), 1), whenDose - userMonths)
        const fnDatevaccine = indexDose === 0
          ? () => addMonths(addDays(dateHourFormat(), adultVaccines * 15), firstDoseMissed ? 0 : whenDose - userMonths)
          : () => addMonths(tempParse[0].date, whenDose - notification.when[0])

        if (isKidVaccine && userMonths > whenDose) return null

        tempParse.push({
          message: formatMessage(notification.vaccineId, notification.when, indexDose),
          calendarId: notification.calendarId,
          date: isKidVaccine ? fnDateVaccineKid() : fnDatevaccine(),
          dose: formatDose(notification.when, indexDose),
          vaccine: vaccines[notification.vaccineId].name
        })
      })
      formated.push(...tempParse)
    })
    logger(TAG, 'formated', JSON.stringify(formated))
    return formated
  }, [calendars, formatMessage, vaccines])

  const createNotifications = useCallback((notificationsToCreate: INotificationFormated[], dependentId: string, dependentName: string) => {
    notificationsToCreate.forEach((notification) => {
      pushNotification.createLocal({
        ...notification,
        message: `${dependentName} - ${notification.message}`,
        date: notification.date,
        dependentId
      })
    })
  }, [pushNotification])

  const main = useCallback(async (birthDate: Date, dependentId: string, dependentName: string) => {
    const calendarIds = getCalendars(birthDate)
    const notificationsToCreate = await getNotificationsToCreate(calendarIds ?? '')
    const notificationsFormated = formatNotificationsDate(notificationsToCreate, birthDate)
    createNotifications(notificationsFormated, dependentId, dependentName)

    logger(TAG, calendarIds, notificationsToCreate)
  }, [createNotifications, formatNotificationsDate, getCalendars, getNotificationsToCreate])

  return main
}
