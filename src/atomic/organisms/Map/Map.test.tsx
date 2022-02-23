import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '~/utils'

import { Map, IMap } from './index'

describe('Organisms/Map', () => {
  const props: IMap = {
    testID: 'Map',
    locations: []
  }

  const elContainer = mockTestID('View', props.testID!).testID

  const renderComponent = () => render(<Map {...props} />, { wrapper })
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
