import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FirebaseAuthTypes } from '@react-native-firebase/auth'

type ISessionInfos = Pick<FirebaseAuthTypes.User, 'metadata' | 'providerId' | 'providerData' | 'uid'>
export interface ISessionState {
  doLogout: boolean
  isAuth: boolean
  infos: ISessionInfos | null
  isLoading: boolean
}

const initialState: ISessionState = {
  doLogout: false,
  isAuth: false,
  infos: null,
  isLoading: false
}

export const sessionSlice = createSlice({
  name: 'Session',
  initialState,
  reducers: {
    setSessionInfos: (state, action: PayloadAction<ISessionInfos>) => {
      state.infos = action.payload
    },
    startSession: (state) => {
      state.isAuth = true
      state.isLoading = false
    },
    endSession: () => initialState,
    startLogout: (state) => {
      state.doLogout = true
      state.isLoading = true
    },
    setIsLoading: (state, action: PayloadAction<boolean>) => {
      state.isLoading = action.payload
    }
  }
})

export const sessionActions = sessionSlice.actions
