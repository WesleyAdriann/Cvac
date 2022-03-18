import { createSlice, PayloadAction } from '@reduxjs/toolkit'

import { IVaccineCalendar } from '~/types'

export interface IVaccinesWithCertificate {
  calendar: IVaccineCalendar
  id: string
  appliedDoses: number
  certificateId: string
  doses: number
  edited?: boolean
  name: string
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
  name: 'VaccineCertificates',
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
