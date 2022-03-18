import { combineReducers } from '@reduxjs/toolkit'

import {
  sessionSlice,
  userProfileSlice,
  calendarsSlice,
  vaccinesSlice,
  vaccineCertificatesSlice,
  notificationsSlice
} from './slices'

export const rootReducer = combineReducers({
  session: sessionSlice.reducer,
  userProfile: userProfileSlice.reducer,
  calendars: calendarsSlice.reducer,
  vaccines: vaccinesSlice.reducer,
  vaccineCertificates: vaccineCertificatesSlice.reducer,
  notifications: notificationsSlice.reducer
})
