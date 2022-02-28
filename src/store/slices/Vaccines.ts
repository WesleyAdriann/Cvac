import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICollectionVaccine } from '~/services/firebase'

export interface IVaccinesState {
  [key: string]: ICollectionVaccine
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
