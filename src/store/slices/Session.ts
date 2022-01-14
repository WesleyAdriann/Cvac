import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'

type ISessionInfos = Pick<FirebaseAuthTypes.User, 'metadata' | 'providerId' | 'providerData' | 'uid'>
export interface ISessionState {
  doLogout: boolean
  isAuth: boolean
  infos: ISessionInfos | null
}

const initialState: ISessionState = {
  doLogout: false,
  isAuth: false,
  infos: null
}

export const sessionSlice = createSlice({
  name: 'Session',
  initialState,
  reducers: {
    startSession: (state, action: PayloadAction<ISessionInfos>) => {
      state.infos = action.payload
      state.isAuth = true
    },
    endSession: () => initialState,
    startLogout: (state) => {
      state.doLogout = true
    }
  }
})

export const sessionActions = sessionSlice.actions
