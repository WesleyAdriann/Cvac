import React, { useState, useEffect, useCallback } from 'react'

import { VaccineCertificatesTemplate } from '~/atomic'
import { useAppSelector, useAppDispatch, vaccineCertificatesActions, IVaccinesWithCertificate } from '~/store'
import { logger, ECalendarsName } from '~/utils'
import {
  collectionDependents,
  colletionCalendar,
  collectionVaccine,
  colletionDependentVaccineDoc
} from '~/services/firebase'

import { IVaccineFromCalendar } from '~/types'

export const VaccineCertificates: React.FC = () => {
  const TAG = 'VaccineCertificates'
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(true)

  const { vaccineCertificates, calendarName, vaccines } = useAppSelector((state) => ({
    calendarName: ECalendarsName[state.calendars[state.vaccineCertificates.calendarId]?.name],
    vaccineCertificates: state.vaccineCertificates,
    vaccines: state.vaccines
  }))

  const getVaccineCertificates = async () => {
    try {
      setIsLoading(true)

      const vaccinesFromCalendar: IVaccineFromCalendar[] = []
      for (const vaccine in vaccines) {
        vaccines[vaccine].calendars.map((calendar) => {
          const calendarId = calendar.id
          if (calendarId === vaccineCertificates.calendarId) {
            vaccinesFromCalendar.push({
              doses: calendar.when.length,
              calendar,
              id: vaccine,
              name: vaccines[vaccine].name
            })
          }
          return null
        })
      }
      logger(TAG, 'vaccines from calendar', vaccinesFromCalendar)

      const dependentsSnap = collectionDependents.doc(vaccineCertificates.dependentId)
      const calendarSnap = colletionCalendar.doc(vaccineCertificates.calendarId)
      const vaccineWithCertificates: IVaccinesWithCertificate[] = []
      for (const vaccine of vaccinesFromCalendar) {
        const vaccineSnap = collectionVaccine.doc(vaccine.id)
        const dependentCertificates =
          await colletionDependentVaccineDoc
            .where('dependentId', '==', dependentsSnap)
            .where('vaccineId', '==', vaccineSnap)
            .where('calendarId', '==', calendarSnap)
            .get()
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

  const onPressDose = useCallback(async (vaccineId: string, doses: number) => {
    const certificates = vaccineCertificates.vaccinesWithCertificates.map((certificate) => ({
      ...certificate,
      appliedDoses: certificate.id === vaccineId ? doses : certificate.appliedDoses,
      edited: true
    }))

    dispatch(vaccineCertificatesActions.setVaccinesWithCertificates(certificates))
  }, [dispatch, vaccineCertificates.vaccinesWithCertificates])

  const onPressSave = useCallback(async () => {
    try {
      logger(TAG, 'onPressSave')
      setIsLoading(true)
      const editedCertificates = vaccineCertificates.vaccinesWithCertificates.filter((certificate) => certificate.edited)
      const reqPromisses = editedCertificates.map((certificate) => {
        if (certificate.certificateId) {
          return colletionDependentVaccineDoc.doc(certificate.certificateId).update({
            doses: certificate.appliedDoses
          })
        }

        if (certificate.appliedDoses === 0) return Promise.resolve()

        return colletionDependentVaccineDoc.add({
          doses: certificate.appliedDoses,
          calendarId: colletionCalendar.doc(vaccineCertificates.calendarId),
          dependentId: collectionDependents.doc(vaccineCertificates.dependentId),
          vaccineId: collectionVaccine.doc(certificate.id)
        })
      })

      await Promise.all(reqPromisses)
    } catch (_error) {
      //
    } finally {
      setIsLoading(false)
    }
  }, [vaccineCertificates.calendarId, vaccineCertificates.dependentId, vaccineCertificates.vaccinesWithCertificates])

  useEffect(() => {
    getVaccineCertificates()
  }, [])

  return (
    <VaccineCertificatesTemplate
      isLoading={isLoading}
      onPressCertificate={onPressDose}
      onPressSave={onPressSave}
      vaccineCertificates={vaccineCertificates.vaccinesWithCertificates}
      calendarName={calendarName}
    />
  )
}
