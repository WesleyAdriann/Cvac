
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

export type TCollectionCalendarName = 'kid' | 'elder' | 'teen' | 'adult'
export interface ICollectionCalendar {
  name: TCollectionCalendarName
  startAge: number
  endAge: number
}

export interface ICollectionDependentVaccineDoc {
  calendarId: FirebaseFirestoreTypes.DocumentReference
  dependentId: FirebaseFirestoreTypes.DocumentReference
  vaccineId: FirebaseFirestoreTypes.DocumentReference
  doses: number
}

export interface ICollectionDependents {
  name: string
  birthDate: FirebaseFirestoreTypes.Timestamp
  userUid: FirebaseFirestoreTypes.DocumentReference
}

export interface ICollectionUsers {
  name: string
  uid: string
}

export interface ICollectionVaccineCalendar {
  id: FirebaseFirestoreTypes.DocumentReference
  loop?: number
  when: number[]
}

export interface ICollectionVaccine {
  calendars: ICollectionVaccineCalendar[]
  disease: string
  name: string
  notes: string[]
}
