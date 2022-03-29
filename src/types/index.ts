import { ICollectionDependents, ICollectionCalendarVaccine } from '~/services/firebase'

export type IDependent = Omit<ICollectionDependents, 'userUid'>

export interface ICalendarVaccine extends Omit<ICollectionCalendarVaccine, 'calendarId' | 'vaccineId'> {
  calendarId: string
  vaccineId: string
}
