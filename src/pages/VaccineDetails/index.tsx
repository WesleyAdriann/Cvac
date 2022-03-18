import React, { useMemo } from 'react'
import { NativeStackScreenProps } from '@react-navigation/native-stack'

import { useAppSelector } from '~/store'
import { VaccineDetailsTemplate } from '~/atomic'

import { RootStackParamList } from '../Navigator'

export interface IVaccineDetails {
  vaccineId: string
  calendarId: string
}

export const VaccineDetails: React.FC<NativeStackScreenProps<RootStackParamList, 'vaccineDetails'>> = ({ route }) => {
  const vaccine = useAppSelector((state) => state.vaccinesReducer[route.params.vaccineId])

  const calendar = useMemo(() => vaccine.calendars.find((calendar) => calendar.id === route.params.calendarId)!, [route.params.calendarId, vaccine.calendars])

  return <VaccineDetailsTemplate {...vaccine} when={calendar.when} loop={calendar.loop} />
}
