import React, { useMemo } from 'react'

import { LatLng, Marker } from 'react-native-maps'

import { Flex } from '../../atoms'

import { StyledMap } from './styles'

export interface ILocation extends LatLng {
  text: string
}

export interface IMap {
  testID?: string,
  locations: ILocation[]
  initialLocation?: LatLng
}

export const Map : React.FC<IMap> = ({ testID = 'LoginForm', initialLocation, locations, ...props }) => {
  const locationsMarker = useMemo(() =>
    locations.map((location) => <Marker key={`${location.latitude}_${location.longitude}`} title={location.text} coordinate={location}/>),
  [locations])

  return (
    <Flex flex={1} testID={testID} {...props}>
      {
        !!initialLocation &&
        <StyledMap
          region={{
            latitude: initialLocation.latitude,
            longitude: initialLocation.longitude,
            latitudeDelta: 0.02,
            longitudeDelta: 0.02
          }}
        >
          {locationsMarker}
        </StyledMap>
      }
    </Flex>
  )
}
