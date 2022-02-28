import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { ICollectionVaccineCalendar, ICollectionVaccine } from '~/services/firebase'

export interface IVaccinesWithCertificate extends Pick<ICollectionVaccine, 'name'> {
  calendar: ICollectionVaccineCalendar
  id: string
  appliedDoses: number
  certificateId: string
  doses: number
}

export interface IVaccineCertificates {
  dependentId: string
  calendarId: string
  vaccinesWithCertificates: IVaccinesWithCertificate[]
}

const initialState: IVaccineCertificates = {
  dependentId: '',
  calendarId: '',
  vaccinesWithCertificates: []
}

export const vaccineCertificatesSlice = createSlice({
  name: 'Session',
  initialState,
  reducers: {
    setDependentId: (state, action: PayloadAction<string>) => {
      state.dependentId = action.payload
    },
    setCalendarId: (state, action: PayloadAction<string>) => {
      state.calendarId = action.payload
    },
    setVaccinesWithCertificates: (state, action: PayloadAction<IVaccinesWithCertificate[]>) => {
      state.vaccinesWithCertificates = action.payload
    },
    clear: () => initialState
  }
})

export const vaccineCertificatesActions = vaccineCertificatesSlice.actions
