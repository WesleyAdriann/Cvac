import { ICollectionVaccine, ICollectionVaccineCalendar, ICollectionDependents } from '~/services/firebase'

export interface IVaccineCalendar extends Omit<ICollectionVaccineCalendar, 'id'> {
  id: string
}

export interface IVaccine extends Omit<ICollectionVaccine, 'calendars'> {
  calendars: IVaccineCalendar[]
}

export type IDependent = Omit<ICollectionDependents, 'userUid'>

export interface IVaccineFromCalendar {
  name: string
  id: string,
  calendar: IVaccineCalendar
  doses: number
}
