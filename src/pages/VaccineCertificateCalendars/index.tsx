import React, { useMemo } from 'react'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

import { VaccineCertificateCalendarsTemplate } from '~/atomic'
import { useAppSelector, useAppDispatch, vaccineCertificatesActions } from '~/store'
import { logger, ECalendarsName } from '~/utils'

export const VaccineCertificateCalendars: React.FC<NativeStackHeaderProps> = ({ navigation }) => {
  const TAG = 'VaccineCertificateCalendars'
  const dispatch = useAppDispatch()

  const { dependentName, calendars } = useAppSelector((state) => ({
    dependentName: state.userProfile.depentents?.[state.vaccineCertificates.dependentId]?.name,
    calendars: state.calendars
  }))

  const formatCalendars = useMemo(() => (
    Object.entries(calendars)
      .map(([key, value]) => ({ name: ECalendarsName[value.name], id: key, age: value.startAge }))
      .sort((calendarA, calendarB) => calendarA.age - calendarB.age)
  ), [calendars])

  const onPress = (calendarId: string) => {
    logger(TAG, 'calendar id', calendarId)
    dispatch(vaccineCertificatesActions.setCalendarId(calendarId))
    navigation.push('vaccineCertificate')
  }

  return (
    <VaccineCertificateCalendarsTemplate
      onPress={onPress}
      name={dependentName}
      calendars={formatCalendars}
    />
  )
}
