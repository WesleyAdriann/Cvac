import firestore from '@react-native-firebase/firestore'

export const collections = {
  calendar: 'calendar',
  dependentVaccineDoc: 'dependentVaccineDoc',
  dependents: 'dependents',
  users: 'users',
  vaccine: 'vaccine'
}

const fire = firestore()

export const colletionCalendar = fire.collection(collections.calendar)
export const colletionDependentVaccineDoc = fire.collection(collections.dependentVaccineDoc)
export const collectionDependents = fire.collection(collections.dependents)
export const collectionUsers = fire.collection(collections.users)
export const collectionVaccine = fire.collection(collections.vaccine)
