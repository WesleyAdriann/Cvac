import React, { useState, useEffect, useCallback } from 'react'

import { VaccineCertificatesTemplate } from '~/atomic'
import { useAppSelector, useAppDispatch, vaccineCertificatesActions, IVaccinesWithCertificate } from '~/store'
import { logger, ECalendarsName } from '~/utils'
import {
  collectionDependents,
  colletionCalendar,
  collectionVaccine,
  colletionDependentVaccineDoc,
  collectionCalendarVaccine
} from '~/services/firebase'

export const VaccineCertificates: React.FC = () => {
  const TAG = 'VaccineCertificates'
  const dispatch = useAppDispatch()
  const [isLoading, setIsLoading] = useState(true)

  const { vaccineCertificates, calendarName, vaccines } = useAppSelector((state) => ({
    calendarName: ECalendarsName[state.calendars[state.vaccineCertificates.calendarId]?.name],
    vaccineCertificates: state.vaccineCertificates,
    vaccines: state.vaccines
  }))

  const getVaccineCertificates = useCallback(async () => {
    try {
      setIsLoading(true)

      const calendarRef = colletionCalendar.doc(vaccineCertificates.calendarId)
      const dependentsRef = collectionDependents.doc(vaccineCertificates.dependentId)

      const calendarVaccines = await collectionCalendarVaccine.where('calendarId', '==', calendarRef).get()
      const baseVaccineDoc = await colletionDependentVaccineDoc.where('dependentId', '==', dependentsRef).where('calendarId', '==', calendarRef).get()

      const vaccineWithCertificates: IVaccinesWithCertificate[] = []
      for (const calendarVaccine of calendarVaccines.docs) {
        const { vaccineId, when } = calendarVaccine.data()
        const { empty, docs } = await baseVaccineDoc.query.where('vaccineId', '==', vaccineId).get()
        const vaccine = vaccines[vaccineId.id]
        vaccineWithCertificates.push({
          doses: when.length,
          vaccineId: vaccineId.id,
          name: vaccine.name,
          appliedDoses: empty ? 0 : docs[0].data().doses,
          certificateId: empty ? '' : docs[0].id,
          when: when[0]
        })
      }
      const sortedCertificates = vaccineWithCertificates.sort(({ when: whenA }, { when: whenB }) => whenA - whenB)

      dispatch(vaccineCertificatesActions.setVaccinesWithCertificates(sortedCertificates))
    } catch (_error) {

    } finally {
      setIsLoading(false)
    }
  }, [dispatch, vaccineCertificates.calendarId, vaccineCertificates.dependentId, vaccines])

  const onPressDose = useCallback(async (vaccineId: string, doses: number) => {
    const certificates = vaccineCertificates.vaccinesWithCertificates.map((certificate) => ({
      ...certificate,
      appliedDoses: certificate.vaccineId === vaccineId ? doses : certificate.appliedDoses,
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
          vaccineId: collectionVaccine.doc(certificate.vaccineId)
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
