import firestore from '@react-native-firebase/firestore'

import * as types from './firestore.types'

const fire = firestore()

export const colletionCalendar = fire.collection<types.ICollectionCalendar>('calendar')
export const colletionDependentVaccineDoc = fire.collection<types.ICollectionDependentVaccineDoc>('dependentVaccineDoc')
export const collectionDependents = fire.collection<types.ICollectionDependents>('dependents')
export const collectionUsers = fire.collection<types.ICollectionUsers>('users')
export const collectionVaccine = fire.collection<types.ICollectionVaccine>('vaccine')
export const collectionCalendarVaccine = fire.collection<types.ICollectionCalendarVaccine>('calendarVaccine')
