import { combineReducers } from '@reduxjs/toolkit'

import { sessionSlice } from './Session'
import { userProfileSlice } from './UserProfile'

export const rootReducer = combineReducers({
  sessionReducer: sessionSlice.reducer,
  userProfileReducer: userProfileSlice.reducer
})
