import React, { useEffect, useState } from 'react'
import RNLocation, { Location } from 'react-native-location'

import { LocationsTemplate } from '../../atomic'

import { getLocations } from '../../services/mapLocations'

export const Locations = () => {
  const [userLocation, setUserLocal] = useState<Location | undefined>(undefined)
  const [isLoading, setIsLoading] = useState(false)

  const getUserLocation = async () => {
    const status = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse'
      }
    })
    if (status) {
      const local = await RNLocation.getLatestLocation()
      setUserLocal(local ?? undefined)
    }
  }

  const getMapLocations = async () => {
    try {
      setIsLoading(true)
      const latitude = `${userLocation?.latitude}`
      const longitude = `${userLocation?.longitude}`
      const locations = await getLocations(latitude, longitude, 30, 'HOSPITAL')
      console.log('>>>', locations)
    } catch (_error) {

    } finally {
      setIsLoading(false)
    }
  }

  useEffect(() => {
    getUserLocation()
  }, [])

  useEffect(() => {
    if (userLocation) getMapLocations()
  }, [userLocation])

  return (
    <LocationsTemplate initialLocation={userLocation} isLoading={isLoading} />
  )
}
