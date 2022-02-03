import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { Region, LatLng } from 'react-native-maps'

import { Flex, Loader } from '../../atoms'
import { AppPage, IAppPage, ListItem, TextInput } from '../../molecules'
import { Map, ILocation } from '../../organisms'

import { ListWrapper } from './styles'

import { locationsMock } from './mock'
export interface ILocationsTemplate extends Omit<IAppPage, 'children' | 'scroll'> {
  testID?: string
  locations?: ILocation[],
  isLoading?: boolean
  mapRegion: Region
  onPressLocation: (latlng:LatLng) => void
  rangeInput: string
  onChangeRange: (range: string) => void
}

export const LocationsTemplate: React.FC<ILocationsTemplate> = ({
  testID = 'LocationsTemplate',
  locations = locationsMock,
  mapRegion,
  isLoading,
  onPressLocation,
  rangeInput,
  onChangeRange,
  ...props
}) => {
  return (
    <AppPage testID={testID} {...props} padding={0}>
      <KeyboardAvoidingView
        behavior='padding'
        keyboardVerticalOffset={98}
        style={{ flex: 1 }}
      >
        <Flex flex={1}>
          <Map
            region={mapRegion}
            locations={locations}
            isLoading={isLoading}
          />
        </Flex>
        <Flex>
          <ListWrapper scroll>
            {
              isLoading
                ? <Loader margin={16} />
                : locations.map((location, index) => (
                  <ListItem
                    key={index}
                    text={location.name}
                    onPress={() => onPressLocation(location)}
                  />
                ))
            }
          </ListWrapper>
          <Flex paddingStyle='16px 16px 0'>
            <TextInput
              affix='km'
              label='Distância máxima'
              type='number'
              disabled={isLoading}
              value={rangeInput}
              onChangeText={onChangeRange}
            />
          </Flex>
        </Flex>
      </KeyboardAvoidingView>
    </AppPage>
  )
}
