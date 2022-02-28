import { ICollectionVaccineCalendar } from '~/services/firebase'

export interface IVaccineFromCalendar {
  name: string
  id: string,
  calendar: ICollectionVaccineCalendar
  doses: number
}
