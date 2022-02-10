import { createSlice, PayloadAction } from '@reduxjs/toolkit'

interface ICalendar {
  startAge: number
  endAge: number
  name: 'kid' | 'elder' | 'teen' | 'adult'
}

export interface ICalendarsState {
  [key: string]: ICalendar
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
