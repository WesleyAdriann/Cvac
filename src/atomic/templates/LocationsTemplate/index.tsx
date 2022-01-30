import React from 'react'
import { KeyboardAvoidingView } from 'react-native'
import { LatLng } from 'react-native-maps'

import { Flex, Loader } from '../../atoms'
import { AppPage, ListItem, TextInput } from '../../molecules'
import { Map, ILocation } from '../../organisms'

import { ListWrapper } from './styles'

import { locationsMock } from './mock'
export interface ILocationsTemplate {
  testID?: string
  locations?: ILocation[],
  isLoading?: boolean
  initialLocation?: LatLng
}

export const LocationsTemplate: React.FC<ILocationsTemplate> = ({
  testID = 'LocationsTemplate',
  locations = locationsMock,
  initialLocation,
  isLoading,
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
            initialLocation={initialLocation}
            locations={locations}
          />
        </Flex>
        <Flex>
          <ListWrapper scroll>
            {
              isLoading
                ? <Loader margin={16} />
                : locations.map((location, index) => (
                  <ListItem key={index} text={location.text} onPress={() => null}/>
                ))
            }
          </ListWrapper>
          <Flex paddingStyle='16px 16px 0'>
            <TextInput affix='km' label='Distância máxima' type='number' disabled={isLoading} />
          </Flex>
        </Flex>
      </KeyboardAvoidingView>
    </AppPage>
  )
}
