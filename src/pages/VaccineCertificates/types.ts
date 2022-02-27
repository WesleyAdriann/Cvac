import { IVaccine, IVaccineCalendar } from '~/store'

export type IVaccineFromCalendar =
  Pick<IVaccine, 'doses' | 'name'> &
  {
    id: string,
    calendar: IVaccineCalendar
  }
