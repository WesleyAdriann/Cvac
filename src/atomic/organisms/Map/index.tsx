import React, { useMemo } from 'react'
import { LatLng, Marker, Region } from 'react-native-maps'

import { Flex } from '../../atoms'

import { StyledMap } from './styles'

export interface ILocation extends LatLng {
  name: string
  description: string
}

export interface IMap {
  testID?: string,
  locations: ILocation[]
  region?: Region
  isLoading?: boolean
}

export const Map : React.FC<IMap> = ({ testID = 'Map', region, locations, isLoading, ...props }) => {
  const locationsMarker = useMemo(() =>
    locations.map((location, index) =>
      <Marker
        key={`${location.latitude}_${location.longitude}_${index}`}
        title={location.name}
        coordinate={location}
        description={location.description}
      />
    ),
  [locations])

  return (
    <Flex {...props} flex={1} testID={testID}>
      <StyledMap
        region={{
          latitude: region?.latitude ?? 0,
          longitude: region?.longitude ?? 0,
          latitudeDelta: region?.latitudeDelta ?? 0.02,
          longitudeDelta: region?.longitudeDelta ?? 0.02
        }}
        loadingEnabled={isLoading}
      >
        {locationsMarker}
      </StyledMap>

    </Flex>
  )
}
