import { ICollectionDependents, ICollectionCalendarVaccine } from '~/services/firebase'
import { PushNotificationScheduledLocalObject } from 'react-native-push-notification'

export type IDependent = Omit<ICollectionDependents, 'userUid'>

export interface ICalendarVaccine extends Omit<ICollectionCalendarVaccine, 'calendarId' | 'vaccineId'> {
  calendarId: string
  vaccineId: string
}

export interface INotification extends PushNotificationScheduledLocalObject {
  message: string
  dose: string
  calendar: string
}
