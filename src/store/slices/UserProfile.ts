import { createSlice, PayloadAction } from '@reduxjs/toolkit'

export interface IUserProfile {
  uid: string | null
  name: string | null,
  email: string | null,
  depentents: any[],
}

const initialState: IUserProfile = {
  uid: null,
  name: null,
  email: null,
  depentents: []
}

export const userProfileSlice = createSlice({
  name: 'UserProfile',
  initialState,
  reducers: {
    startSession: (state, action: PayloadAction<Omit<IUserProfile, 'depentents'>>) => ({
      ...action.payload,
      depentents: state.depentents
    }),
    setDepentents: (state, action: PayloadAction<any[]>) => {
      state.depentents = action.payload
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    endSession: () => initialState
  }
})

export const userProfileActions = userProfileSlice.actions
