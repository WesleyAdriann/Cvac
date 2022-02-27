import React, { useState, useEffect } from 'react'
import firestore from '@react-native-firebase/firestore'

import { VaccineCertificatesTemplate } from '../../atomic'
import { useAppSelector, useAppDispatch, vaccineCertificatesActions, IVaccinesWithCertificate } from '~/store'
import { logger } from '~/utils'

import { IVaccineFromCalendar } from './types'

export const VaccineCertificates: React.FC = () => {
  const TAG = 'VaccineCertificates'
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(true)

  const { vaccineCertificates, calendarName, vaccines } = useAppSelector((state) => ({
    calendarName: state.calendarsReducer[state.vaccineCertificates.calendarId]?.name,
    vaccineCertificates: state.vaccineCertificates,
    vaccines: state.vaccinesReducer
  }))

  const getVaccineCertificates = async () => {
    try {
      setIsLoading(true)

      const vaccinesFromCalendar: IVaccineFromCalendar[] = []
      for (const vaccine in vaccines) {
        vaccines[vaccine].calendars.map((calendar) => {
          const calendarId = calendar?.id.id
          if (calendarId === vaccineCertificates.calendarId) {
            vaccinesFromCalendar.push({
              doses: vaccines[vaccine].doses,
              calendar,
              id: vaccine,
              name: vaccines[vaccine].name
            })
          }
          return null
        })
      }
      logger(TAG, 'vaccines from calendar', vaccinesFromCalendar)

      const dependentsSnap = firestore().collection('dependents').doc(vaccineCertificates.dependentId)
      const vaccineWithCertificates: IVaccinesWithCertificate[] = []
      for (const vaccine of vaccinesFromCalendar) {
        const vaccineSnap = firestore().collection('vaccine').doc(vaccine.id)
        const dependentCertificates = await firestore().collection('dependentVaccineDoc').where('dependentId', '==', dependentsSnap).where('vaccineId', '==', vaccineSnap).get()
        vaccineWithCertificates.push({
          ...vaccine,
          appliedDoses: dependentCertificates.empty ? 0 : dependentCertificates.docs[0].data().doses,
          certificateId: dependentCertificates.empty ? '' : dependentCertificates.docs[0].id
        })
      }

      logger(TAG, 'vaccines with Certificates', vaccineWithCertificates)

      dispatch(vaccineCertificatesActions.setVaccinesWithCertificates(vaccineWithCertificates))
    } catch (_error) {

    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getVaccineCertificates()
  }, [])

  return (
    <VaccineCertificatesTemplate
      isLoading={isLoading}
      onPressVaccine={() => null} onPressSave={() => null}
      vaccineCertificates={vaccineCertificates.vaccinesWithCertificates}
    />
  )
}
