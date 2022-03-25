import React, { useState, useEffect } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { useAppSelector } from '~/store'
import { VaccineDetailsTemplate } from '~/atomic'
import {
  collectionCalendarVaccine,
  colletionCalendar,
  collectionVaccine
} from '~/services/firebase'
import { ICalendarVaccine } from '~/types'

import { RootStackParamList } from '../Navigator'

export interface IVaccineDetails {
  vaccineId: string
  calendarId: string
}

export const VaccineDetails: React.FC<NativeStackScreenProps<RootStackParamList, 'vaccineDetails'>> = ({ route }) => {
  const [calendar, setCalendar] = useState<ICalendarVaccine>({ when: [], loop: 0 })
  const vaccine = useAppSelector((state) => state.vaccines[route.params.vaccineId])

  const getDetails = async () => {
    const calendarRef = colletionCalendar.doc(route.params.calendarId)
    const vaccineRef = collectionVaccine.doc(route.params.vaccineId)
    const response = await collectionCalendarVaccine.where('calendarId', '==', calendarRef).where('vaccineId', '==', vaccineRef).get()
    const { when, loop } = response.docs[0].data()
    setCalendar({
      when,
      loop
    })
  }

  useEffect(() => {
    if (!calendar.when.length) getDetails()
  }, [])

  return <VaccineDetailsTemplate {...vaccine} when={calendar.when} loop={calendar.loop} />
}
