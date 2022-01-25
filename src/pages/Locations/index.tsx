import React, { useEffect, useState } from 'react'
import RNLocation, { Location } from 'react-native-location'

import { LocationsTemplate } from '../../atomic'

export const Locations = () => {
  const [local, setLocal] = useState<Location | undefined>(undefined)

  const getLocation = async () => {
    const status = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse'
      }
    })
    if (status) {
      const local = await RNLocation.getLatestLocation()
      setLocal(local ?? undefined)
    }
  }

  useEffect(() => {
    getLocation()
  }, [])

  return (

    <LocationsTemplate initialLocation={local}/>
  )
}
