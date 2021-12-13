import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'

export interface ISessionState {
  isAuth: boolean
  user: FirebaseAuthTypes.User | null
}

const initialState: ISessionState = {
  isAuth: false,
  user: null
}

export const sessionSlice = createSlice({
  name: 'session',
  initialState,
  reducers: {
    startSession: (state, action: PayloadAction<FirebaseAuthTypes.User>) => {
      state.user = action.payload
      state.isAuth = true
    },
    endSession: (state) => {
      state = initialState
    }
  }
})

export const { startSession, endSession } = sessionSlice.actions
