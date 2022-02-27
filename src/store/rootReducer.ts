import { combineReducers } from '@reduxjs/toolkit'

import { sessionSlice, userProfileSlice, calendarsSlice, vaccinesSlice, vaccineCertificatesSlice } from './slices'

export const rootReducer = combineReducers({
  sessionReducer: sessionSlice.reducer,
  userProfileReducer: userProfileSlice.reducer,
  calendarsReducer: calendarsSlice.reducer,
  vaccinesReducer: vaccinesSlice.reducer,
  vaccineCertificates: vaccineCertificatesSlice.reducer
})
