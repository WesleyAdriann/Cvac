import { ICollectionDependents, ICollectionCalendarVaccine } from '~/services/firebase'

export type IDependent = Omit<ICollectionDependents, 'userUid'>

export type ICalendarVaccine = Pick<ICollectionCalendarVaccine, 'loop' | 'when'>
