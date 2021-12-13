import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface ISessionState {
  isAuth: boolean
  email: string
}

const initialState: ISessionState = {
  isAuth: false,
  email: ''
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    startSession: (state, action: PayloadAction<string>) => {
      state.email = action.payload
      state.isAuth = true
    },
    endSession: (state) => {
      state = initialState
    }
  }
})

export const { startSession, endSession } = sessionSlice.actions
