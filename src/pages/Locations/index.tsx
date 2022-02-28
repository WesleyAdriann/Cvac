import React, { useEffect, useState, useCallback } from 'react'
import { Dimensions } from 'react-native'
import RNLocation from 'react-native-location'
import { Region, LatLng } from 'react-native-maps'

import { LocationsTemplate } from '~/atomic'
import { IDialog } from '~/atomic/molecules/Dialog'
import { getLocations } from '~/services/mapLocations'
import { ILocation } from '~/atomic/organisms'

const ASPECT_RATIO = Dimensions.get('window').width / Dimensions.get('window').height

const initialMapRegion: Region = {
  latitudeDelta: 0.02,
  longitudeDelta: 0.02,
  latitude: 0,
  longitude: 0
}

export const Locations = () => {
  const [mapRegion, setMapRegion] = useState<Region>(initialMapRegion)
  const [userLocation, setUserLocation] = useState<LatLng>()
  const [isLoading, setIsLoading] = useState(true)
  const [locations, setLocations] = useState<ILocation[]>([])
  const [range, setRange] = useState('5')
  const [dialog, setDialog] = useState<IDialog>({ visible: false })

  const calculateDelta = (fartherLocation = '') => {
    const lastLocation = parseFloat(fartherLocation) / 40
    const latitudeDelta = isNaN(lastLocation) ? 0.02 : lastLocation
    return {
      latitudeDelta,
      longitudeDelta: ASPECT_RATIO * latitudeDelta
    }
  }

  const getUserLocation = async () => {
    const status = await RNLocation.requestPermission({
      ios: 'whenInUse',
      android: {
        detail: 'coarse'
      }
    })
    if (status) {
      const local = await RNLocation.getLatestLocation()
      const location = {
        latitude: 0,
        longitude: 0,
        ...local
      }
      setUserLocation(location)
      setMapRegion((prev) => ({ ...prev, ...local }))
    }
  }

  const getMapLocations = useCallback(async () => {
    try {
      setIsLoading(true)
      const latitude = `${userLocation?.latitude}`
      const longitude = `${userLocation?.longitude}`
      const locationsResponse = await getLocations(latitude, longitude, range)
      const locationsParse = locationsResponse.data.locations.map(({ nome, latitude, longitude, logradouro, distancia }) =>
        ({ name: nome, latitude, longitude, description: `${logradouro} - ${distancia}Km` })
      )
      const delta = calculateDelta(locationsResponse.data.locations.pop()?.distancia)
      setLocations(locationsParse)
      setMapRegion({
        latitude: userLocation?.latitude ?? 0,
        longitude: userLocation?.longitude ?? 0,
        latitudeDelta: delta.latitudeDelta,
        longitudeDelta: delta.longitudeDelta
      })
    } catch (_error) {
      setDialog({
        visible: true,
        title: 'Erro para o encontrar os locais proximos'
      })
    } finally {
      setIsLoading(false)
    }
  }, [range, userLocation])

  const updateMapRegion = ({ latitude, longitude }: LatLng) => {
    setMapRegion({ latitude, longitude, ...calculateDelta('1') })
  }

  useEffect(() => {
    getUserLocation()
  }, [])

  useEffect(() => {
    const timeout = setTimeout(() => {
      if (userLocation?.latitude) getMapLocations()
    }, 1000)
    return () => clearTimeout(timeout)
  }, [userLocation, range])

  return (
    <LocationsTemplate
      mapRegion={mapRegion}
      isLoading={isLoading}
      locations={locations}
      onPressLocation={updateMapRegion}
      rangeInput={range}
      onChangeRange={setRange}
      dialog={{
        ...dialog,
        onClose: () => setDialog({ visible: false })
      }}
    />
  )
}
