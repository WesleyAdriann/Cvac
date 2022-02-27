
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

export type TCollectionCalendarName = 'kid' | 'elder' | 'teen' | 'adult'
export interface ICollectionCalendar {
  name: TCollectionCalendarName
  startAge: number
  endAge: number
}

export interface ICollectionDependentVaccineDoc {
  calendarId: FirebaseFirestoreTypes.DocumentReference
}
