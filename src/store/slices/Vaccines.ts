import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IVaccine } from '~/types'

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
