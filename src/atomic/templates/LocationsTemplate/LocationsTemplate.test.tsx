
import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '../../../utils'

import { LocationsTemplate, ILocationsTemplate } from './index'

describe('Templates/LocationsTemplate', () => {
  const props: ILocationsTemplate = {
    testID: 'LocationsTemplate',
    mapRegion: { latitude: 0, latitudeDelta: 0, longitude: 0, longitudeDelta: 0 },
    onPressLocation: jest.fn(),
    rangeInput: '3',
    onChangeRange: jest.fn()
  }

  const elContainer = mockTestID('SafeAreaView', props.testID!).testID

  const renderComponent = () => render(<LocationsTemplate {...props} />, { wrapper })
  let component = renderComponent()

  beforeEach(() => {
    jest.clearAllMocks()
    cleanup()
    component = renderComponent()
  })

  it(`should render component #${elContainer}`, async () => {
    const sut = await component.findByTestId(elContainer)
    expect(sut).toBeTruthy()
  })

  it('should render snapshot', () => {
    expect(component.toJSON()).toMatchSnapshot()
  })
})
