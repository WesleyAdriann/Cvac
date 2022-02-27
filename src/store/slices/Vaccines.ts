import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

export interface IVaccineCalendar {
  id: FirebaseFirestoreTypes.DocumentReference
  loop?: number
  when: number[]
}

export interface IVaccine {
  name: string
  disease: string
  notes: string[]
  doses: number
  calendars: IVaccineCalendar[]
}

export interface IVaccinesState {
  [key: string]: IVaccine
}

const initialState: IVaccinesState = {}

export const vaccinesSlice = createSlice({
  name: 'Vaccines',
  initialState,
  reducers: {
    setVaccines: (_state, action: PayloadAction<IVaccinesState>) => action.payload,
    clearVaccines: () => initialState
  }
})

export const vaccinesActions = vaccinesSlice.actions
