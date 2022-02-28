import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICollectionCalendar } from '~/services/firebase/firestore.types'

export interface ICalendarsState {
  [key: string]: ICollectionCalendar
}

const initialState: ICalendarsState = {}

export const calendarsSlice = createSlice({
  name: 'Calendars',
  initialState,
  reducers: {
    setCalendars: (_state, action: PayloadAction<ICalendarsState>) => action.payload,
    clearCalendars: () => initialState
  }
})

export const calendarsActions = calendarsSlice.actions
