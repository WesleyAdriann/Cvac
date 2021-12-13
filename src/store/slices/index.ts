import { combineReducers } from '@reduxjs/toolkit'

import { sessionSlice } from './Session'

export const rootReducer = combineReducers({
  sessionReducer: sessionSlice.reducer
})
