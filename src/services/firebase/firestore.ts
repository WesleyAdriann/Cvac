import firestore from '@react-native-firebase/firestore'

import * as types from './firestore.types'

export const collections = {
  calendar: 'calendar',
  dependentVaccineDoc: 'dependentVaccineDoc',
  dependents: 'dependents',
  users: 'users',
  vaccine: 'vaccine'
}

const fire = firestore()

export const colletionCalendar = fire.collection<types.ICollectionCalendar>(collections.calendar)
export const colletionDependentVaccineDoc = fire.collection<types.ICollectionDependentVaccineDoc>(collections.dependentVaccineDoc)
export const collectionDependents = fire.collection<types.ICollectionDependents>(collections.dependents)
export const collectionUsers = fire.collection<types.ICollectionUsers>(collections.users)
export const collectionVaccine = fire.collection<types.ICollectionVaccine>(collections.vaccine)
