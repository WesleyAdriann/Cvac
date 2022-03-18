import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IDependent } from '~/types'

export interface IUserProfile {
  uid: string | null
  name: string | null,
  email: string | null,
  depentents: { [key: string]: IDependent } | null,
}

const initialState: IUserProfile = {
  uid: null,
  name: null,
  email: null,
  depentents: null
}

export const userProfileSlice = createSlice({
  name: 'UserProfile',
  initialState,
  reducers: {
    startSession: (state, action: PayloadAction<Omit<IUserProfile, 'depentents'>>) => ({
      ...action.payload,
      depentents: state.depentents
    }),
    setDepentents: (state, action: PayloadAction<{ [key: string]: IDependent }>) => {
      state.depentents = action.payload
    },
    setDepentent: (state, action: PayloadAction<IDependent & { id: string }>) => {
      state.depentents = Object.assign(state.depentents, { [action.payload.id]: action.payload })
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    endSession: () => initialState
  }
})

export const userProfileActions = userProfileSlice.actions
