import { createSlice, PayloadAction } from '@reduxjs/toolkit'
import { FirebaseFirestoreTypes } from '@react-native-firebase/firestore'

import { ICollectionDependents } from '~/services/firebase'

export interface IUserProfile {
  uid: string | null
  name: string | null,
  email: string | null,
  depentents: { [key: string]: ICollectionDependents } | null,
  documentRef: FirebaseFirestoreTypes.DocumentReference | null
}

const initialState: IUserProfile = {
  uid: null,
  name: null,
  email: null,
  depentents: null,
  documentRef: null
}

export const userProfileSlice = createSlice({
  name: 'UserProfile',
  initialState,
  reducers: {
    startSession: (state, action: PayloadAction<Omit<IUserProfile, 'depentents'>>) => ({
      ...action.payload,
      depentents: state.depentents
    }),
    setDepentents: (state, action: PayloadAction<{ [key: string]: ICollectionDependents }>) => {
      state.depentents = action.payload
    },
    setDepentent: (state, action: PayloadAction<ICollectionDependents>) => {
      state.depentents = Object.assign(state.depentents, action.payload)
    },
    setName: (state, action: PayloadAction<string>) => {
      state.name = action.payload
    },
    endSession: () => initialState
  }
})

export const userProfileActions = userProfileSlice.actions
