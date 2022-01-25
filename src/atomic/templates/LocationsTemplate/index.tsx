import React from 'react'

import { KeyboardAvoidingView } from 'react-native'

import { Flex } from '../../atoms'
import { AppPage, ListItem, TextInput } from '../../molecules'

import { ListWrapper } from './styles'

export interface ILocation {
  latitude: number,
  longitude: number,
  text: string
}

export interface ILocationsTemplate {
  testID?: string
  locations: ILocation[],
  isLoading?: boolean
}

export const LocationsTemplate: React.FC<ILocationsTemplate> = ({
  testID = 'LocationsTemplate',
  locations = [1,2,3,5,6],
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

      </Flex>
      <Flex>
        <ListWrapper scroll>
          {
            locations.map((location, index) => (
              <ListItem key={index} text='foo' onPress={() => null}/>
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
