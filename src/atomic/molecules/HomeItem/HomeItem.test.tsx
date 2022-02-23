import React from 'react'
import { render, cleanup } from '@testing-library/react-native'

import { AllTheProviders as wrapper, mockTestID } from '~/utils'

import { HomeItem, IHomeItem } from './index'

describe('Molecules/HomeItem', () => {
  const props: IHomeItem = {
    testID: 'HomeItem',
    icon: 'calendar',
    onPress: jest.fn(),
    text: 'Calendario'
  }

  const elContainer = mockTestID('Pressable', props.testID!).testID

  const renderComponent = () => render(<HomeItem {...props} />, { wrapper })
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
