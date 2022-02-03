import React, { useEffect } from 'react'

import firestore from '@react-native-firebase/firestore'

import { CalendarsTemplate } from '../../atomic'
import { NativeStackHeaderProps } from '@react-navigation/native-stack'

export const Calendars: React.FC<NativeStackHeaderProps> = ({navigation}) => {
  const getCalendars = async () => {
    const calendars = await firestore().collection('calendar')
    // console.log('"""',calendars)
    // console.log(await calendars.docs[0].id)
    const vaccines = await firestore().collection('vaccine').get()

    const fullData: any[] = []
    vaccines.docs.forEach((doc) => {
      // calendars.docs.map(foo => console.log('>>', foo))
      doc.get('calendars').map(async (ca) => console.log('>>', ca.id.id, await calendars.doc(ca.id.id).get()))

      // await calendars.doc(ca.id.path).get()
    })
    console.log(fullData)
  }

  useEffect(() => {
    getCalendars()
  }, [])

  const isTouch = (item: boolean) =>{
    if (item === true){
      return navigation.push('vaccineDetails')
    }
  }

  return( 
    <CalendarsTemplate
      checkIsTouch={isTouch}      
   />
   )
}
